const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;

const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets("reboot", "forms");

    render() {
      return (
        <>
          <label for="customRange1" class="form-label">
            Example range1
          </label>
          <input type="range" class="form-range" id="customRange1">

          </input>
          <label for="customRange2" class="form-label">
            Example range2
          </label>
          <input
            type="range"
            class="form-range"
            min="0"
            max="5"
            id="customRange2"
          ></input>
        </>
      );
    }
  }
);
export default <App />;
