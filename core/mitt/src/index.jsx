import mitt from "mitt";
import { h, render, define, Component } from "wpa";

const emitter = mitt();

define(
  "child-ele",
  class extends Component {
    onClick = () => {
      emitter.emit("foo", { a: "b" });
    };
    render() {
      return <div onClick={this.onClick}>child-ele</div>;
    }
  }
);

define(
  "my-app",
  class extends Component {
    install() {
      emitter.on("foo", (e) => console.log("foo", e));
    }

    render() {
      return (
        <div>
          <child-ele />
        </div>
      );
    }
  }
);

render(<my-app />, "body");
