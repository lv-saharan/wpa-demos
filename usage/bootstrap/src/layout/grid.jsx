const { h, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;

const App = uniqueTag(
  class extends Component {
    static css = [
      css.getCSSStyleSheets("reboot", "utilities", "grid"),
      `.row>div{
        border:1px solid #ccc;
        line-height:2.6;
    }
    .container{
        margin:1rem 0;  
    }
    `,
    ];
    render() {
      return (
        <>
          <div class="container text-center">
            <div class="row">
              <div class="col">Column</div>
              <div class="col">Column</div>
              <div class="col">Column</div>
            </div>
          </div>

          <div class="container text-center">
            <div class="row">
              <div class="col">1 of 2</div>
              <div class="col">2 of 2</div>
            </div>
            <div class="row">
              <div class="col">1 of 3</div>
              <div class="col">2 of 3</div>
              <div class="col">3 of 3</div>
            </div>
          </div>

          <div class="container text-center">
            <div class="row">
              <div class="col">1 of 3</div>
              <div class="col-6">2 of 3 (wider)</div>
              <div class="col">3 of 3</div>
            </div>
            <div class="row">
              <div class="col">1 of 3</div>
              <div class="col-5">2 of 3 (wider)</div>
              <div class="col">3 of 3</div>
            </div>
          </div>

          <div class="container text-center">
            <div class="row">
              <div class="col align-self-start">One of three columns</div>
              <div class="col align-self-center">One of three columns</div>
              <div class="col align-self-end">One of three columns</div>
            </div>
          </div>

          <div class="container px-4 text-center">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
);

export default (
  <fieldset>
    <legend>Grids Columns Gutters</legend>
    <App />
  </fieldset>
);
