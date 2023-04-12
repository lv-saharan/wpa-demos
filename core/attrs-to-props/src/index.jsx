import { h, render, uniqueTag, Component } from "wpa";
import css from "./index.scss";

const Part = uniqueTag(
  class extends Component {
    static defaultProps = {
    };
    static propTypes = {
      count: Number,
    };
    render(props) {
      return (
        <>
          <b>Count:{props.count}</b>
          <button
            onClick={(evt) => {
              this.updateProps({
                count: (props.count ?? 0) + 1,
              });
              this.update();
            }}
          >
            Count++
          </button>
        </>
      );
    }
  }
);
const App = uniqueTag(
  class extends Component {
    static css = css;
    static defaultProps = {
      type: null,
    };
    static propTypes = {
      type: Number,
    };
    render(props) {
      return (
        <>
          <ul>
            {Object.keys(props).map((key) => (
              <li>
                <span class="key">{key}</span>
                <span class="value">{props[key]}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={(evt) => {
              this.updateProps({
                props1: 1,
                type: 2,
              });
            }}
          >
            0 Update Props
          </button>

          <hr />
          <Part count="2"></Part>
          <hr></hr>
          <Part />
          <hr></hr>

          <button
            onClick={(evt) => {
              this.update();
              console.log("update");
            }}
          >
            1 Update
          </button>
          <h1>
            Update
            之后由于没在defaultProps中的设定值会“幸免”更新回去，但是CSS属性难以幸免！
          </h1>
          <h1>
            attrs to props
            方法有一定的不合理性，本身应该可以支持控件在任何html文档中使用，同时也会产生各种奇怪现象。
          </h1>

          <button
            onClick={(evt) => {
              this.update(true);
            }}
          >
            2 Update ignoreAttrs
          </button>
          <h1>这个方法不会重新读取属性。</h1>

          <h1>
            按照这个思路，更新props应该更新定义过的attrs，但是很多情况attrs是绑定的，一些更新又会更新attrs，进而更新props
          </h1>
          <button
            onClick={(evt) => {
              this.updateProps({
                type: 3,
              });
              this.pureSetAttribute("type", 3);
            }}
          >
            3 Update Props and Attrs，点击 1、2 按钮 type始终是3{" "}
          </button>
        </>
      );
    }
  }
);
render(<App type="1" name="app" />, "body");
