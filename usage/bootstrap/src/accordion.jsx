const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;
 
/**
 * @file accordion
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/styles/accordion|WPA示例}
 */
const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets("reboot", "accordion")
    render() {
      return (
        <>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-wp-toggle="collapse"
                  data-wp-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #123456
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-wp-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-wp-toggle="collapse"
                  data-wp-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-wp-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-wp-toggle="collapse"
                  data-wp-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-wp-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
);

export default (
  <>
    <wp-tab
      items={[
        {
          nav: "wp-accordion",
          pane: (
            <>
              <wp-accordion
                first-open
                items={[
                  {
                    header: "Accordion #1",
                    body: "hello,body",
                  },
                  {
                    header: "Accordion #2",
                    body: "body 2",
                  },
                  {
                    header: (
                      <span>
                        <wp-icon name="home" /> HOME
                      </span>
                    ),
                    body: (item, setting, accordion) => {
                      if (!item.__body) {
                        setTimeout(() => {
                          item.__body = <h1>Function Callback</h1>;
                          accordion.update();
                        }, 10000);

                        return <wp-loading name="ball-fall" size=".5" />;
                      } else {
                        return item.__body;
                      }
                    },
                  },
                ]}
              />
            </>
          ),
        },
        {
          nav: "html+css",
          pane: <App />,
        },
      ]}
    />
  </>
);
