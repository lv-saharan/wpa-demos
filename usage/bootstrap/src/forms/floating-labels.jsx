const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;

const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets("reboot", "forms");

    render() {
      return (
        <>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
        </>
      );
    }
  }
);
export default <App />;
