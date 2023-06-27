const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;
/**
 * @file modal
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/styles/modal|WPA示例}
 */
const App = uniqueTag(
  class extends Component {
    static css = [
      css.getCSSStyleSheets(
        "reboot",
        "forms",
        "modal",
        "buttons",
        "utilities",
        "close"
      ),
      `
      [slot=footer]>button{
        margin:4px;
      }
    
    `,
    ];
    async install() {}
    render() {
      return (
        <div>
          <div class="modal position-static d-block" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <wp-modal static-position>
            <h5>\(^o^)/~ static</h5>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <div slot="header">
              自定義 Header
              <button className="btn btn-primary position-absolute top-0 end-0">
                Click ME
              </button>
            </div>
            <div slot="footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={(evt) => {
                  let modal = evt.target.closest("wp-modal");

                  modal.close();
                  console.log(modal);
                }}
              >
                Close
              </button>

              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </wp-modal>

          <button
            className="btn btn-primary"
            onClick={(evt) => {
              this.$("#m3").open();
            }}
          >
            顯示對話框
          </button>
          <wp-modal
            id="m3"
            css={`
            :host .modal{
              --wp-modal-margin:8em!important;
            }
            `}
            title={
              <>
                <wp-icon name="home" /> HOME
              </>
            }
          >
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <div>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  let modal = evt.target.closest("wp-modal");

                  modal.update$Props({
                    fullscreen: !modal.$props.fullscreen,
                  });
                }}
              >
                全屏
              </button>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  let modal = evt.target.closest("wp-modal");

                  modal.update$Props({
                    size: "sm",
                  });
                }}
              >
                small
              </button>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  let modal = evt.target.closest("wp-modal");

                  modal.update$Props({
                    size: null,
                  });
                }}
              >
                default
              </button>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  let modal = evt.target.closest("wp-modal");

                  modal.update$Props({
                    size: "lg",
                  });
                }}
              >
                large
              </button>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  let modal = evt.target.closest("wp-modal");

                  modal.update$Props({
                    size: "xl",
                  });
                }}
              >
                xx large
              </button>
            </div>
            <div slot="footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={(evt) => {
                  let modal = evt.target.closest("wp-modal");

                  modal.close();
                  console.log(modal);
                }}
              >
                Close
              </button>

              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </wp-modal>

          <hr />

          <button
            className="btn btn-primary"
            onClick={(evt) => {
              this.$("#m4").open();
            }}
          >
            顯示對話框 static backdrop
          </button>
          <wp-modal
            id="m4"
            static-backdrop
            title={
              <>
                <wp-icon name="home" /> HOME
              </>
            }
          >
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <div slot="footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={(evt) => {
                  let modal = evt.target.closest("wp-modal");

                  modal.close();
                  console.log(modal);
                }}
              >
                Close
              </button>

              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </wp-modal>

          <hr />

          <button
            className="btn btn-primary"
            onClick={(evt) => {
              this.$("#m5").open();
            }}
          >
            顯示對話框 長內容
          </button>

          <button
            className="btn btn-primary"
            onClick={(evt) => {
              this.$("#m6").open();
            }}
          >
            顯示對話框 滾動內容
          </button>

          <button
            className="btn btn-primary"
            onClick={(evt) => {
              this.$("#m7").open();
            }}
          >
            顯示對話框 垂直居中
          </button>
          <wp-modal
            id="m5"
            title={
              <>
                <wp-icon name="home" /> 長內容
              </>
            }
          >
            <div style="height:1000px;">
              <p>Modal body text goes here.</p>
              <p>Modal body text goes here.</p>
              <p>Modal body text goes here.</p>
              <p>Modal body text goes here.</p>
            </div>

            <div slot="footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={(evt) => {
                  let modal = evt.target.closest("wp-modal");

                  modal.close();
                  console.log(modal);
                }}
              >
                Close
              </button>

              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </wp-modal>
          <wp-modal
            id="m6"
            scrollable
            title={
              <>
                <wp-icon name="home" /> 長內容滾動
              </>
            }
          >
            <div style="height:1000px;">
              <p>Modal body text goes here.</p>
              <p>Modal body text goes here.</p>
              <p>Modal body text goes here.</p>
              <p>Modal body text goes here.</p>
            </div>

            <div slot="footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={(evt) => {
                  let modal = evt.target.closest("wp-modal");

                  modal.close();
                  console.log(modal);
                }}
              >
                Close
              </button>

              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </wp-modal>

          <wp-modal
            id="m7"
            vcentered
            title={
              <>
                <wp-icon name="home" /> 垂直居中
              </>
            }
          >
            <div>
              <p>Modal body text goes here.</p>
              <p>Modal body text goes here.</p>
              <p>Modal body text goes here.</p>
              <p>Modal body text goes here.</p>
            </div>

            <div slot="footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={(evt) => {
                  //                  let modal = evt.target.closest("wp-modal");
                  //edge 不支持
                  let modal = evt.target.closest("wp-modal");
                  modal.close();
                  console.log(modal);
                }}
              >
                Close
              </button>

              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </wp-modal>
        </div>
      );
    }
  }
);
export default (
  <fieldset>
    <legend>Modal </legend>
    <pre></pre>
    <App />
  </fieldset>
);
