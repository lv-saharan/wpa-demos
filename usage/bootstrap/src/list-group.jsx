const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;
const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets("reboot", "forms", "list-group");
    async install() {
      // this.css.button = await css.load("button");
    }
    render() {
      return (
        <div>
          <ul class="list-group">
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="firstCheckbox"
              />
              <label class="form-check-label" for="firstCheckbox">
                First checkbox
              </label>
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="secondCheckbox"
              />
              <label class="form-check-label" for="secondCheckbox">
                Second checkbox
              </label>
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="thirdCheckbox"
              />
              <label class="form-check-label" for="thirdCheckbox">
                Third checkbox
              </label>
            </li>
          </ul>
        </div>
      );
    }
  }
);
export default (
  <fieldset>
    <legend>List Group </legend>
    <pre></pre>
    <App />
  </fieldset>
);
