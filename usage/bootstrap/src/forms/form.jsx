const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;

const App = uniqueTag(
  class extends Component {
    static css = [
      css.CSSStyleSheets.reboot,
      css.CSSStyleSheets.utilities,
      css.CSSStyleSheets.containers,
      css.CSSStyleSheets.grid,
      css.CSSStyleSheets.forms,
      css.CSSStyleSheets.buttons,
    ];

    render() {
      return (
        <>
          <form action="">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
          <hr />
          <form class="row g-3">
            <div class="col-auto">
              <label for="staticEmail2" class="visually-hidden">
                Email
              </label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail2"
                value="email@example.com"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">
                Confirm identity
              </button>
            </div>
          </form>
          <hr />
          <label for="exampleColorInput" class="form-label">
            Color picker
          </label>
          <input
            type="color"
            class="form-control form-control-color"
            id="exampleColorInput"
            value="#563d7c"
            title="Choose your color"
          ></input>
          <hr />
          <label for="exampleDataList" class="form-label">
            Datalist example
          </label>
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
          <hr />

          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <hr />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              Checked checkbox
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Default radio
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Default checked radio
            </label>
          </div>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Default switch checkbox input
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Checked switch checkbox input
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDisabled"
              disabled
            />
            <label class="form-check-label" for="flexSwitchCheckDisabled">
              Disabled switch checkbox input
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckCheckedDisabled"
              checked
              disabled
            />
            <label
              class="form-check-label"
              for="flexSwitchCheckCheckedDisabled"
            >
              Disabled checked switch checkbox input
            </label>
          </div>
          <hr />
          <input
            type="checkbox"
            class="btn-check"
            id="btn-check"
            autocomplete="off"
          />
          <label class="btn btn-primary" for="btn-check">
            Single toggle
          </label>
          <hr />
          <input
            type="radio"
            class="btn-check"
            name="options"
            id="option1"
            autocomplete="off"
            checked
          />
          <label class="btn btn-secondary" for="option1">
            Checked
          </label>

          <input
            type="radio"
            class="btn-check"
            name="options"
            id="option2"
            autocomplete="off"
          />
          <label class="btn btn-secondary" for="option2">
            Radio
          </label>

          <input
            type="radio"
            class="btn-check"
            name="options"
            id="option3"
            autocomplete="off"
            disabled
          />
          <label class="btn btn-secondary" for="option3">
            Disabled
          </label>

          <input
            type="radio"
            class="btn-check"
            name="options"
            id="option4"
            autocomplete="off"
          />
          <label class="btn btn-secondary" for="option4">
            Radio
          </label>

          <hr />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            />
            <label class="form-check-label" for="flexCheckIndeterminate">
              Indeterminate checkbox
            </label>
          </div>
          <label for="customRange1" class="form-label">
            Example range
          </label>
          <input type="range" class="form-range" id="customRange1"></input>

          <hr />
          <h3>Input group</h3>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>

          <label for="basic-url" class="form-label">
            Your vanity URL
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">
              https://example.com/users/
            </span>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">.00</span>
          </div>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
            />
            <span class="input-group-text">@</span>
            <input
              type="text"
              class="form-control"
              placeholder="Server"
              aria-label="Server"
            />
          </div>

          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>

          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                value="Mark"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                value="Otto"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustomUsername" class="form-label">
                Username
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom03" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom04" class="form-label">
                State
              </label>
              <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">Please select a valid state.</div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom05" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom05"
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </>
      );
    }
  }
);
export default <App />;
