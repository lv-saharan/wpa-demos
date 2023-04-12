import { h, render, Component, uniqueTag } from "wpa";

class test extends Component {
  static stylesheets = [new URL("./css/default.css", import.meta.url).href];
  style = "style1";

  stylesheets() {
    return [new URL(`./css/${this.style}.css`, import.meta.url).href];
  }
  render() {
    return (
      <div>
        <h1>一段文字</h1>
        <button
          onClick={() => {
            if (this.style == "style1") this.style = "style2";
            else this.style = "style1";
            this.update();
          }}
        >
          Update
        </button>
      </div>
    );
  }
}
const APP = uniqueTag(test);

const APP2 = uniqueTag(class extends test {
  static stylesheets = new URL("./css/default.css", import.meta.url).href;
  style = "style2";

  stylesheets =
    new URL(`./css/${this.style}.css`, import.meta.url).href

})
const APP3 = uniqueTag(class extends test {
  static stylesheets = new URL("./css/default.css", import.meta.url).href;
  style = "style2";

  stylesheets = [
    new URL(`./css/style3.css`, import.meta.url).href,
    () => {
      return new URL(`./css/${this.style}.css`, import.meta.url).href
    }]

  css = [
    `
      button{
        color:blue;
      } 
      `,
    () => {
      let hour = new Date().getHours();
      let bg;
      if (hour < 8) {
        bg = "red";
      } else if (hour < 16) {
        bg = "yellow"
      } else {
        bg = "green"
      }
      return `
        button{
          background-color:${bg};
        }
        `
    }
  ]
})
let cssss = new CSSStyleSheet()
cssss.replace(`
  h1::after{
    content:'---- css style sheet!!';
    color:black;
  }
`)
 
render(<APP />, "body");
render(<hr />, "body");
render(<APP2 />, "body");
render(<APP3 cssss={cssss} />, "body");
