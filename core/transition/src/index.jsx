import {
  h,
  render,
  uniqueTag,
  Component,
  classNames,
} from "wpa";

import css from "./index.scss";

const App = uniqueTag(
  class extends Component {
    static css = css;

    classes = [
      { names: "", seconds: 2 },
      { names: "s1 s2", seconds: 2 },
      { names: "s3", seconds: 5 },
      { names: "s3 s4", seconds: 2 },
    ];
    index = 0;
    run() {
      this.index = this.index % this.classes.length;
      let { names, seconds } = this.classes[this.index];
      this.currClasses = names;
      this.index++;
      setTimeout(() => {
        this.update();
        this.run();
      }, seconds * 1000);
    }
    install() {
      this.run();
    }
    render() {
      return (
        <div>
          <div className={classNames("item", this.currClasses)}></div>
        </div>
      );
    }
  }
);
render(<App />, "body");
