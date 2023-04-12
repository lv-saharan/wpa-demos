const { h, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;

const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets("reboot", "containers");
    render() {
      return (
        <>
          <div class="container">Content here</div>

          <div class="container-sm">100% wide until small breakpoint</div>
          <div class="container-md">100% wide until medium breakpoint</div>
          <div class="container-lg">100% wide until large breakpoint</div>
          <div class="container-xl">100% wide until extra large breakpoint</div>
          <div class="container-xxl">
            100% wide until extra extra large breakpoint
          </div>
        </>
      );
    }
  }
);

export default (
  <fieldset>
    <legend>Containers</legend>
    <App />
  </fieldset>
);
