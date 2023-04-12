import { h, render, Component, uniqueTag } from "wpa";
const test = async (attr) => {
  //console.log(attr, val, oldVal)
  //这里有个问题，update 会产生异步
  console.log(attr, "inner begin");

  await test2(attr);

  console.log(attr, "inner end");
};
const test2 = async (attr) => {
  console.log("run test2", attr);
};
const App = uniqueTag(
  class extends Component {
    static get observedAttributes() {
      return ["name", "type"];
    }
    attributeChangedCallback(attr, oldVal, val) {
      console.log(attr, "begin change");
      test(attr);
      console.log(attr, "end change");
      //if (this.isInstalled) this.update();
    }
    install() {
      console.log("install");
    }
    receiveProps(props, prev) {
      console.log("props change", props, prev);
    }
    render(props) {
      return (
        <>
          {" "}
          <h2>
            通过 chrome 改变 My Attrs:
            <ol>
              {[...this.attributes].map((attr) => (
                <li>
                  [{attr.name}]:[{attr.value}]
                </li>
              ))}
            </ol>
          </h2>
        </>
      );
    }
  }
);
const Wrap = uniqueTag(
  class extends Component {
    type = 0;
    name = "app";
    render() {
      return (
        <>
          <App class="demo" name={this.name} type={this.type} />
          <button
            onClick={(evt) => {
              this.type++;
              this.name += this.type;
              this.update();
            }}
          >
            Change Type
          </button>
        </>
      );
    }
  }
);
render(<Wrap />, "body");
