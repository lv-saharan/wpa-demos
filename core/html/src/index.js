import {
  render,
  define,
  Component,
  html,
} from "wpa";
//方式一，組件
define("af-part-1", class extends Component {
  css = [fetch(new URL("./css/part1.css", import.meta.url).href).then(r => r.text())]
  render() {
    let $lis = []
    for (let i = 0; i < 10; i++) {
      $lis.push(html`<li>${i}</li>`)
    }
    return html`<ul>
    ${$lis}
    </ul>
    `
  }
})

//方式二、函數

let times = 0
render(({ update }) => {

  let num = Math.ceil(Math.random() * 20)
  times++
  setTimeout(() => {
    update()
  }, 2000);
  return html`<div>
  <h3>第${times}次刷新</h3>
  <ul>
  ${Array.from({ length: num }).map((v, index) => html`<li>${index}</li>`)}
  </ul></div>
  `
}, "#demo2")