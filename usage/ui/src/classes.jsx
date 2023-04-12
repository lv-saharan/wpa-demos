const { h, define, Component, classNames, uniqueTag } = wpa;
const { css, effect } = wpa.ui;
const App = uniqueTag(
  class extends Component {
    static css = [
      `
    .item {
        width:100px;
        height:100px;
        border:solid 1px #ccc;
        transition:all 2s;
    }
    .e1{
        width:200px;
    }
    .e2{
        height:200px;
    }
    .e3{
        background-color:red;
    }
    `,
      css.getCSSStyleSheets("reboot", "buttons", "card", "grid", "transitions"),
    ];
    installed() {
      let settings1 = [
        {
          classNames: "e1",
          duration: 2,
          delay: 1,
        },
        {
          classNames: "e2",
          duration: 2,
        },
        {
          classNames: "e3",
          duration: 2,
        },
        {
          classNames: "",
          duration: 2,
        },
      ];

      let settings2 = [
        {
          classNames: "e1",
          duration: 2,
          delay: 1,
        },
        {
          classNames: "e1 e2",
          duration: 2,
        },
        {
          classNames: "e1 e2 e3",
          duration: 2,
        },
        {
          classNames: "e1 e2",
          duration: 2,
        },
        {
          classNames: "e1",
          duration: 2,
        },
        {
          classNames: "",
          duration: 2,
        },
      ];

      let settings3 = [
        {
          classNames: "e1",
          duration: 2,
          delay: 10,
        },
        {
          classNames: "e1 e2 e3",
          duration: 2,
          delay: 10,
        },
        {
          classNames: "",
          duration: 2,
        },
      ];

      css.timingClassNames(this.$("#item1"), settings1, Infinity);
      css.timingClassNames(this.$("#item2"), settings2, 6);
      css.timingClassNames(this.$("#item3"), settings3, 9);
    }
    render() {
      return (
        <>
          <fieldset>
            <legend>Collapse</legend>
            <p>
              <button
                class="btn btn-primary"
                type="button"
                onClick={(evt) => {
                  effect.collapse.toggle(this.$("#collapseExample"));
                }}
              >
                Button
              </button>
            </p>
            <div id="collapseExample" class="col-3 collapse">
              <div class="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>

            <p>
              <button
                class="btn btn-primary"
                type="button"
                onClick={(evt) => {
                  effect.collapse.toggle(this.$("#collapseWidthExample"));
                }}
              >
                Toggle width collapse
              </button>
            </p>
            <div style="min-height: 120px;">
              <div
                class="collapse collapse-horizontal"
                id="collapseWidthExample"
              >
                <div class="card card-body" style="width: 300px;">
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Fade</legend>
            <p>
              <button
                class="btn btn-primary"
                type="button"
                onClick={(evt) => {
                  effect.fade.toggle(this.$("#fadeExample"));
                }}
              >
                Button
              </button>
            </p>
            <div id="fadeExample" class="col-3">
              <div class="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
          </fieldset>

          <div class="item" id="item1"></div>
          <div class="item" id="item2"></div>
          <div class="item" id="item3"></div>
        </>
      );
    }
  }
);
export default <App />;
