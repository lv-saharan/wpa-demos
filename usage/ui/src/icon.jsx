const { h, define, Component, classNames } = wpa;
const { icon, importURL } = wpa.ui;

const loadIcons = async (type) => {
  let { default: icons } = await import(
    new URL(`icons/${type}.js`, importURL).href
  );
  return icons;
};
const TYPES = ["filled", "sharp", "two-tone", "outlined", "round"];
/**
 * @file icon
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/icon|WPA示例}
 */
define(
  "icon-demo",
  class extends Component {
    filter = "";

    async render(props) {
      const { default: _1k } = await import(
        new URL("icons/filled/1k.js", importURL).href
      );
      return (
        <>
          <div>
            <h3></h3>
            <input
              placeholder="輸入關鍵字"
              type="search"
              onKeyUp={(evt) => {
                this.filter = evt.currentTarget.value;
                this.updateTargets("wp-tab");
              }}
            />
          </div>
          <wp-tab
            css={`
              :host [name="email"] {
                --wp-icon-color: blue;
              }

              ul.icons.filled svg {
                fill: red;
              }
              ul.icons.sharp svg {
                fill: orange;
              }
              ul.icons.two-tone svg {
                fill: yellow;
              }
              ul.icons.outlined svg {
                fill: green;
              }
              ul.icons.round svg {
                fill: cyan;
              }
              ul li {
                display: inline-block;
                width: 20%;
                text-align: center;
                margin-bottom: 0.5rem;
                padding: 0;
              }
              ul li div {
                overflow: hidden;
                text-overflow: clip;
              }
            `}
            items={[
              ...TYPES.map((type, index) => {
                return {
                  key: type,
                  nav: type,
                  pane: ({ update, vnode, component }) => {
                    //如果没有加载过，或者搜索词变了就重新生成
                    if (component.activeIndex !== index) return null;
                    if (vnode.__filter != this.filter) vnode.__pane = null;
                    if (!vnode.__pane) {
                      vnode.__filter = this.filter;
                      loadIcons(type).then((icons) => {
                        vnode.__pane = (
                          <ul class={classNames("icons", type)}>
                            {Object.keys(icons)
                              .filter((key) => key.includes(this.filter))
                              .map((key) => {
                                return (
                                  <li
                                    title={`<wp-icon name="${key}" type="${type}"/>`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="3rem"
                                      height="3rem"
                                      viewBox="0 0 24 24"
                                    >
                                      {icons[key]}
                                    </svg>
                                    <div>{key}</div>
                                  </li>
                                );
                              })}
                          </ul>
                        );
                        update();
                      });
                    }

                    return vnode.__pane ?? <wp-loading />;
                  },
                };
              }),

              {
                key: "usage",
                nav: "用法",
                pane: (
                  <div>
                    <h3>樣式覆蓋</h3>
                    <wp-icon
                      name="email"
                      css={`
                        :host svg {
                          fill: pink;
                        }
                      `}
                    ></wp-icon>
                    <hr />

                    <h3>屬性設置</h3>
                    <wp-icon name="1k" size="2" color="red"></wp-icon>

                    <p>頁簽中覆蓋了email樣式</p>
                    <wp-icon name="email" size="2" color="red"></wp-icon>

                    <wp-icon name="email" id="email4" size="4"></wp-icon>

                    <wp-icon name="email" size=".5"></wp-icon>
                    <hr />
                    <button>
                      <wp-icon name="star" type="sharp" />
                      按钮
                    </button>
                    <hr />
                    <h3>直接使用SVG</h3>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3em"
                        height="3em"
                        viewBox="0 0 24 24"
                      >
                        {_1k}
                      </svg>

                      <p>icon.createSvg(name,type,mode,props)</p>
                      {await icon.createSvg(
                        "2k",
                        icon.TYPES.SHARP,
                        icon.MODES.SINGLE,
                        {
                          width: "4rem",
                          height: "4rem",
                          fill: "blue",
                        }
                      )}
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </>
      );
    }
  }
);
export default (
  <fieldset>
    <legend>
      <h1>图标</h1>
    </legend>
    <h2>
      <a href="https://marella.me/material-design-icons/demo/svg/">可用图标</a>
    </h2>
    <icon-demo />
  </fieldset>
);
