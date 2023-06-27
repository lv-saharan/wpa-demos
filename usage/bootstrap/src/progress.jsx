const { h, define, Component, classNames, uniqueTag } = wpa;
const { css: { getCSSStyleSheets } } = wpa.ui;
/**
 * @file progress
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/styles/progress|WPA示例}
 */
const App = uniqueTag(
  class extends Component {
    static css = [
      getCSSStyleSheets(
        "reboot",
        "progress",
        "utilities",
        "transitions"
      ),
    ];
    percent = 26
    installed() {
      setInterval(() => {
        if (this.percent < 100) {
          this.percent++
          this.update()
        }
      }, 1000);
    }
    render() {
      return (
        <>
          hello,world!
          <wp-progress value={this.percent} style="height:1px;width:200px"></wp-progress>
          <hr />
          <wp-progress value={this.percent} class="bg-success"></wp-progress>
          <hr />
          <wp-progress value={this.percent} class="bg-danger" striped></wp-progress>



          <hr />
          <wp-progress value={this.percent} class="bg-danger" striped animated></wp-progress>
        </>
      );
    }
  }
);

export default (
  <fieldset>
    <legend>Uploader </legend>
    <pre></pre>
    <App />
  </fieldset>
);
