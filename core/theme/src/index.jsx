import { h, render, Component, uniqueTag, setTheme } from "wpa";

class test extends Component {
  static css = `
  h1{
    color:red ;
  }
  `
  render() {
    return (
      <div>
        <h1>APP1 </h1>
      </div>
    );
  }
}
const APP = uniqueTag(test);

const APP2 = uniqueTag(class extends Component {
  static css = `
  h1{
    color:blue ;
  }
  `
  render() {
    return <>
      <APP />
      <h1>APP2 </h1>
    </>
  }
})
const APP3 = uniqueTag(class extends test {
  static css = `
  h1{
    color:green ;
  }
  `


  render() {
    return <>
      <APP2 />
      <h1>APP3 </h1>
      <button onClick={() => setTheme(`
        h1{
          color:red ;
        }
      `)}>红色</button>
      <button onClick={() => setTheme(`
        h1{
          color:blue ;
        }
      `)}>蓝色</button>
      <button onClick={() => setTheme(`
        h1{
          color:green ;
        }
        :host(${APP2}) h1{
          border:solid 1px red;
        }
      `)}>绿色</button>
    </>
  }
})
render(<APP3 />, "body");
