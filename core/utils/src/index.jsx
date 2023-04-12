import {
  h,
  render,
  Component,
  classNames,
  route,
  apis,
  html,
  uniqueTag,
} from "wpa";
import "wpa-ui";
import regex from "./regex";

let App = uniqueTag(
  class extends Component {
    render() {
      return (
        <>
          <wp-tab items={[{ nav: "正则替换", pane: regex }]} />
        </>
      );
    }
  }
);

render(<App></App>, "body");
