import { h, render, define, Component } from "wpa";

render(
  <>
    <h1>绑定测试</h1>
    <input o-model="location.href" style="width:50rem;"></input>
    <h1>o-model</h1>
  </>,
  "body"
);

define(
  "app-main",
  class extends Component {
    data = {
      name: "saharan",
      likes: ["tv", "music", "reading"],
    };
    //指定绑定的范围
    get bindingScope() {
      return this.data;
    }
    showLikes = true;
    render() {
      return (
        <>
          <h1>表单绑定</h1>
          <ul>
            <li>
              name:
              <input o-model="name" />
            </li>
            {this.showLikes ? (
              <li>
                likes:
                {["tv", "game", "reading", "music", "others"].map((l) => (
                  <label>
                    <input o-model="likes" type="checkbox" value={l}></input>
                    {l}
                  </label>
                ))}
              </li>
            ) : null}
          </ul>
          <button
            onClick={(evt) => {
              this.data.name = "sa";
              this.updateBindings();
            }}
          >
            set name to sa
          </button>
          <button
            onClick={(evt) => {
              this.showLikes = false;
              this.update();
            }}
          >
            hide likes
          </button>
        </>
      );
    }
  }
);
render(<app-main />, "body");
