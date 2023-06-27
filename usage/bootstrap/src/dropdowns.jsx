const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;
/**
 * @file dropdowns
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/styles/dropdowns|WPA示例}
 */
const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets(
      "reboot",
      "utilities",
      "button-group",
      "buttons",
      "forms",
      "grid"
    );
    css = `
    :host{
      display:block;
      height:1000px;
    }
    .dropdown-menu{
      margin:0;
      padding:.5rem;
      border:solid 1px #ccc;
      background:white;
    
    }
    .dropdown-menu li{
      list-style:none;
      line-height:1.5;
    }
    `;
    async install() {
      // this.css.button = await css.load("button");
    }
    render() {
      return (
        <div>
          <wp-dropdown
            placement="bottom-start"
            menu={
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            }
          >
            <button class="btn btn-secondary" type="button">
              Dropdown button1
            </button>
          </wp-dropdown>

          <wp-dropdown placement="bottom-start">
            <button class="btn btn-secondary" type="button">
              Dropdown button1
            </button>
            <ul class="dropdown-menu" slot="menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </wp-dropdown>

          <wp-dropdown
            placement="bottom-end"
            menu={
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            }
          >
            <button class="btn btn-secondary" type="button">
              Dropdown button1
            </button>
          </wp-dropdown>
          <hr />
          <h5>slot</h5>
          <wp-dropdown>
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button">
              Dropdown link
            </a>

            <ul class="dropdown-menu" slot="menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </wp-dropdown>
          <wp-dropdown placement="right-start">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>

            <form
              class="p-4"
              slot="menu"
              style="background-color:#ccc;width:200px"
            >
              <div class="mb-3">
                <label for="exampleDropdownFormEmail2" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleDropdownFormEmail2"
                  placeholder="email@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleDropdownFormPassword2" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleDropdownFormPassword2"
                  placeholder="Password"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="dropdownCheck2"
                  />
                  <label class="form-check-label" for="dropdownCheck2">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={(evt) => {
                  evt.target.closest("wp-dropdown").hide();
                }}
              >
                Sign in
              </button>
            </form>
          </wp-dropdown>

          <wp-dropdown>
            <button type="button" class="btn btn-primary">
              Dropdown
              <wp-icon name="arrow_drop_down" color="white" size="1.2" />
            </button>
            <div
              slot="menu"
              style="border:solid 1px #ccc;padding:1rem;background:black;color:white;"
            >
              menu.....
            </div>
          </wp-dropdown>
          <hr />
        </div>
      );
    }
  }
);
export default (
  <fieldset>
    <legend>dropdown </legend>
    <pre></pre>
    <App />
  </fieldset>
);
