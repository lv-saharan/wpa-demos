const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;
/**
 * @file card
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/styles/card|WPA示例}
 */
const App = uniqueTag(
  class extends Component {
    static css = [css.getCSSStyleSheets("reboot", "grid", "card", "utilities")];
    async install() {
      // this.css.button = await css.load("button");
    }
    render() {
      return (
        <div>
          <div class="row">
            {Array.from({ length: 6 }).map(() => {
              return (
                <div class="col-sm-3">
                  <div class="card" style="width: 18rem;">
                    <img
                      src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
);
export default (
  <fieldset>
    <legend>CARD </legend>
    <pre></pre>
    <App />
  </fieldset>
);
