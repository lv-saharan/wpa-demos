import { h, render, define, Component } from "wpa";
import "wpa-ui";

import css from "./index.scss";


define("aa-bb", class extends Component {
  static defaultProps = {
    showPager: false,
    total: 100
  }
  show() {
    this.showPager = true;
    this.update()
  }
  get pagerSection() {
    return this.$props.showPager ? <wp-pagination total={this.total} /> : null
  }
  render() {
    return this.pagerSection
  }
})


define("aa-cc", class extends Component {
  show = false
  get pagerSection() {
    return this.show ? <wp-pagination total={this.total} /> : null
  }
  render() {
    return <>
      {this.pagerSection}
      <button onClick={evt => {
        this.show = true
        this.updateSelf()
      }}>show</button>
    </>
  }
})
render(<aa-cc />, "body")