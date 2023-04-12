import {
  h,
  render,
  uniqueTag,
  Component,
  define,
} from "wpa";
const count = 123;
render(<h1 class="test"> hello：{count}</h1>, "body");
render(
  {
    nodeName: "h1",
    children: [
      () => {
        "!!!";
      },
      "hello",
      {
        nodeName: "span",
        children: [" ", "world", "!"],
        attributes: {
          style: {
            color: "blue",
          },
        },
      },
    ],
    attributes: {
      style: {
        color: "red",
      },
    },
  },
  "body"
);

render(h("h1", {}, "hello", ",", "world!"), "body");

let props = { width: 80, height: 90 };

render(<h1 {...props}> hello</h1>, "body");

const Part = uniqueTag(
  class extends Component {
    
    render(props) {
      return (
        <h1>
          {props.name}:{props.msg}
          {() => <h3>function name(params) {}</h3>}
          <button
            onClick={(evt) => {
              this.updateProps({
                msg: "are you ok?",
              });
              console.log(partProps);
            }}
          >
            log
          </button>
        </h1>
      );
    }
  }
);
const partProps = {
  name: "part",
  msg: "??",
};
render(<Part {...partProps}></Part>, "body");

define("p-100", ({ props }) => {
  console.log(props);
  return (
    <>
      <h3>hello,function</h3>
    </>
  );
});

render(<p-100 {...partProps}></p-100>, "body");
