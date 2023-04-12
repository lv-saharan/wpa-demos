import { h, render, define, Component } from "wpa";

import css from "./index.scss";

const sleep = n => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, n * 1000);
  })
}
define("wp-async-1", class extends Component {
  async render() {
    await sleep(1)
    return <>
      <h1>asyc....</h1>
    </>
  }
})

define("wp-app", class extends Component {

  render() {
    return <>
      <h1>hello,world</h1>
      <wp-async-1 />
    </>
  }
})


render(<wp-app></wp-app>, 'body')