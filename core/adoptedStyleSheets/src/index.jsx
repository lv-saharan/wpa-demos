import { h, render, Component, uniqueTag } from "wpa";
import { basicStyle } from "./css.js";
import css from "./css/index.scss";
console.log(css);
// console.log(css)
let css2 = "./src/css2.js";

let style = new CSSStyleSheet();
style.replaceSync(`
  .css-stylesheet{
    color:green;
  }
`);
const APP = uniqueTag(
  class extends Component {
    static css = [
      css,
      `.str{
      color:blue;
    }
    `,
      () => `
    .func{
      color:red;
    }
    `,
      async () => {
        //异步，default Module
        return import(css2);
      },
      style,
      [
        //可以嵌套的，可以是导入的
        basicStyle,
      ],
    ];
    render() {
      return (
        <div>
          <div class="str">css 字符串</div>
          <div class="func">css 函数</div>
          <div class="css-stylesheet">
            css
            CSSStyleSheet,这其实有一定用处，当页面组建中大量零散的重用样式就可以共享，而不用重新创建。
            <span>比如：button、form、等等的以创建好，然后组合使用。</span>
          </div>
        </div>
      );
    }
  }
);
render(<APP css={":host button{color:blue}"} />, "body");


const Part1 = uniqueTag(class extends Component {

  render() {
    return <h1>Part1</h1>
  }
})


const Part2 = uniqueTag(class extends Component {

  render() {
    return <div>
      <Part1 />
      <h1>Par2</h1>
    </div>

  }
})

render(<div>
  <hr></hr>
  <Part1 theme-css="h1{color:red;}" />

  <Part2 theme-css="h1{color:blue;}" />
</div>, "body");
