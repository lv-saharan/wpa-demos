const { h, uniqueTag, route, Component } = wpa;
export { default as user } from "./user";
export { default as welcome } from "./welcome";

/**
 * 目前route不是很理想，子模块中不能继续使用
 */

import module1 from "./sub-route/module1";
import module2 from "./sub-route/module2";

const tag1 = uniqueTag(module1);
const tag2 = uniqueTag(module2);

const ModuleTags = {
  m1: tag1,
  m2: tag2,
};
const defaultModule = "m1";
let appComponent = class extends Component {
  currModule = defaultModule;
  pathRoot = "";
  get currModuleTag() {
    return ModuleTags[this.currModule];
  }

  install() {
    this.currModule = this.props.params.sub ?? defaultModule;
    let path = location.hash ? location.hash.substring(1) : false;
    if (path !== false) {
      let names = path.split("/");
      let last = names.pop();
      if (ModuleTags[last]) {
        // this.currModule = last
        this.pathRoot = names.join("/");
      } else {
        this.pathRoot = [...names, last].join("/");
      }
    }

    // Object.keys(ModuleTags).forEach(key => {
    //     let path = `${this.pathRoot}/${key}`
    //     route(path, evt => {
    //         this.currModule = key
    //         this.update()
    //     })
    // })
  }
  installed() {
    window.addEventListener("hashchange", (evt) => {
      let path = location.hash ? location.hash.substring(1) : false;
      if (path !== false) {
        if (path.startsWith(this.pathRoot)) {
          let sub = path.substring(this.pathRoot.length + 1);
          if (sub) {
            this.currModule = sub;
            this.updateSelf();
          }
        }
      }
    });
  }
  render(props) {
    return (
      <>
        <h1>Remote Default Module ，sub Module ：{this.currModule}</h1>
        <ul>
          <li>
            <a href={`#${this.pathRoot}/m1`}>子模块1</a>
          </li>
          <li>
            <a href={`#${this.pathRoot}/m2`}>子模块2</a>
          </li>
        </ul>
        <hr />
        <this.currModuleTag />
      </>
    );
  }
};
const AppTag = uniqueTag(appComponent);
/**
 * 动态标签需大写首字母
 */
export default <AppTag />;

export { default as sortable } from "./sortable";
export { default as editor } from "./editor";
export { default as echarts } from "./echarts";
