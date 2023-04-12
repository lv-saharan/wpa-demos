import pkg from "./package.json" assert { type: "json" };
import esbuild from "esbuild";
import fs from "fs";
import path from "path";
import { sassPlugin } from "esbuild-sass-plugin";
import { dev } from "local-dev-server";
const [mode] = process.argv.splice(2);

const entryRoots = ["./core", "./usage"];
//esbuild 如果所有入口都是一个根目录会提升一级目录 ！！！
const outRoot = entryRoots.length == 1 ? entryRoots.at(0) : "";
const entryPoints = [];
const findEntryPoints = (dirPath) => {
  const dirStat = fs.statSync(dirPath);
  if (dirStat.isDirectory()) {
    //check src
    if (dirPath.endsWith("src")) {
      const jsxIndex = path.join(dirPath, "index.jsx");
      if (fs.existsSync(jsxIndex)) {
        entryPoints.push(jsxIndex);
        return;
      }
      const jsIndex = path.join(dirPath, "index.js");
      if (fs.existsSync(jsIndex)) {
        entryPoints.push(jsIndex);
        return;
      }
    } else {
      fs.readdirSync(dirPath).forEach((file) => {
        const filePath = path.join(dirPath, file);
        findEntryPoints(filePath);
      });
    }
  }
};
entryRoots.forEach((dir) => {
  findEntryPoints(dir);
});

console.log("find entryPoints", entryPoints);

const externalRegxes = [];
const externals = (mode !== "dev" ? pkg.externals : pkg.devExternals) ?? {};
for (let key in externals) {
  const filter = new RegExp(`^${key}$`);
  externalRegxes.push({
    filter,
    path: externals[key],
  });
}
const externalPlugin = {
  name: "external",
  setup(build) {
    build.onResolve({ filter: /^\// }, (args) => {
      return {
        path: args.path,
        external: true,
      };
    });
    for (let rule of externalRegxes) {
      build.onResolve({ filter: rule.filter }, (args) => {
        console.log("find rule", rule);
        return {
          path: rule.path,
          external: true,
        };
      });
    }
  },
};
const options = {
  jsxFactory: "h",
  jsxFragment: "h.f",
  format: "esm",
  bundle: true,
  sourcemap: true,
  minify: true,
  charset: "utf8",
  entryPoints,
  entryNames: "[dir]/../[name]", //src的上层目录
  outdir: `./dist/${outRoot}`,
  plugins: [
    externalPlugin,
    sassPlugin({
      type: "css-text",
    }),
  ],
};

let buildResult = null;

const __dir = path.resolve(".");
function findHTML(dirPath) {
  const dirStat = fs.statSync(dirPath);
  const files = [];
  if (dirStat.isDirectory()) {
    fs.readdirSync(dirPath).forEach((file) => {
      files.push(...findHTML(path.join(dirPath, file)));
    });
  } else {
    if (dirPath.endsWith(".html")) {
      files.push(dirPath);
    }
  }
  return files;
}
const response = (filePath, res) => {
  // console.info("dir", __dir, filePath, path.relative(__dir, filePath))
  if (path.relative(__dir, filePath) == "index.html") {
    //生成一个所有html页面的链接
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INDEX</title>
</head>
<body>
    ${entryRoots
      .map(
        (dir) => `
        <ul>
        ${findHTML(dir)
          .map(
            (file) => `
            <li>
                <a href="${file}">${file}</a>
            </li>
            `
          )
          .join("")}
        </ul>
        `
      )
      .join("")}
</body>
</html>
        `);
    return true;
  }
  const outfile = buildResult?.outputFiles.find(
    (file) => file.path == filePath
  );
  if (outfile) {
    res.setHeader("Content-Type", "application/javascript;charset=utf-8");
    res.end(outfile.contents);
    return true;
  }
  return false;
};
const { reload } = dev({ ...pkg.localDev.server, response });
esbuild
  .build({
    ...options,
    write: mode == "build",
    outdir: mode == "build" ? "dist" : `./${outRoot}`,
    watch:
      mode == "build"
        ? false
        : {
            onRebuild(error, result) {
              if (error) console.error("watch build failed:", error);
              else {
                buildResult = result;
                console.log("watch rebuild succeeded:");
                reload("solution rebuild ok");
              }
            },
          },
  })
  .then((result) => {
    buildResult = result;
  });
