import {
  WeElement,
  h,
  render,
  define,
  Component,
} from "wpa";
class OMIEl extends WeElement {
  render(props) {
    return <h1>{props.title}</h1>;
  }
}
define("omi-el", OMIEl);
class wpaEl extends Component {

  render(props) {
    return <h1>{props.title}</h1>;
  }
}
define("wpa-el", wpaEl);
const arr = Array.from({ length: 10000 });

render(<h2>插入10000个 wpa 组件</h2>, "body");

console.time("10000 wpa");
render(
  <div>
    {arr.map((v, index) => (
      <wpa-el title={`omi-${index + 1}`}></wpa-el>
    ))}
  </div>,
  "body"
);
console.timeEnd("10000 wpa");

render(<h2>插入10000个 OMI 组件</h2>, "body");
console.time("10000 OMI");
render(
  <div>
    {arr.map((v, index) => (
      <omi-el title={`omi-${index + 1}`}></omi-el>
    ))}
  </div>,
  "body"
);
console.timeEnd("10000 OMI");
