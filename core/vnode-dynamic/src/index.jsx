import {
  h,
  render,
  uniqueTag,
  Component,
  define,
} from "wpa";

let count = 0;
let Timer = <b>当前时间555：{() => new Date().toUTCString()}</b>;
render(({ update }) => {
  return (
    <>
      计数：{count}
      <button
        onClick={(evt) => {
          count++;
          update();
        }}
      >
        +
      </button>
      {Timer}
    </>
  );
}, "body");

const currTime = <div>currTime is {() => new Date().toUTCString()}</div>;

function AFunc(props, { update, children }) {
  setTimeout(() => {
    update();
  }, 2000);
  return (
    <h1>
      {props.title}current time is :{Date.now()}
      <hr></hr>
      {children}
    </h1>
  );
}

render(
  <AFunc title="您好">
    <b>AAAA</b>
    {() => {
      return <b>{count}</b>;
    }}
  </AFunc>,
  "body"
);

setInterval(() => {
  render(currTime, "body");
}, 2000);

//step 1
let n = 0;
let h2 = render(
  ({ update }) => {
    if (n == 0) {
      return (
        <h2>
          hello,world!!{" "}
          <button
            onClick={(evt) => {
              n = 1;
              update();
            }}
          >
            Change
          </button>
        </h2>
      );
    } else {
      return <h2>oK!</h2>;
    }
  },

  "body"
);
h2.addEventListener("updated", () => {
  console.log("function updated");
});
///////////////////////////////////////////////////////////////////

// //step 2

let h2s = (
  <>
    <h2>hello</h2>
    <h2>world</h2>
  </>
);

let h2sf = () => h2s;

let div = render(<div>{h2sf}</div>, "body");

console.log(div);
// /////////////////////////////////////////////////////////////////////////

//step 3

const App1 = uniqueTag(
  class extends Component {
    n = 1;
    render() {
      return (
        <>
          <span>{this.n}：</span>
          <span>hello,</span>
          <span>world </span>{" "}
          <button
            onClick={(evt) => {
              this.n++;
              this.fire("nplus", n);
              this.update();
            }}
          >
            update
          </button>
          {({ update }) => (
            <>
              <br />
              <span>1</span>
              <span>2</span>
              {this.n}
              <button
                onClick={(evt) => {
                  this.n++;
                  update();
                }}
              >
                update func part
              </button>
            </>
          )}
          <slot></slot>
        </>
      );
    }
  }
);

render(
  <App1>
    {({ update }) => {
      return (
        <h2>
          slot here :{new Date().toISOString()}{" "}
          <button
            onClick={(evt) => {
              update();
            }}
          >
            update slot time
          </button>
        </h2>
      );
    }}
  </App1>,
  "body"
);
