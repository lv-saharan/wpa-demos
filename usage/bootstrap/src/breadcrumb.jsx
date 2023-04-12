const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;

const items = [
  {
    href: "#/home",
    label: (
      <>
        <wp-icon name="home"></wp-icon>HOME
      </>
    ),
  },
  {
    href: "#library",
    label: (
      <>
        <wp-icon name="local_library" color="green"></wp-icon>LIBRARY
      </>
    ),
  },
  {
    label: (
      <>
        <wp-icon name="data_object" color="blue"></wp-icon>DATA
      </>
    ),
  },
];
const App = uniqueTag(
  class extends Component {
    static css = [css.CSSStyleSheets.reboot, css.CSSStyleSheets.breadcrumb];

    render() {
      return (
        <>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                Home
              </li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
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
          nav: "wp-breadcrumb",
          pane: (
            <>
              <wp-breadcrumb items={items} />
              <wp-breadcrumb items={items} divider="|" />
              <wp-breadcrumb items={items} divider=">" />
              <wp-breadcrumb items={items} divider="~" />
              <wp-breadcrumb
                items={items}
                divider={<wp-icon name="keyboard_arrow_right" />}
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
