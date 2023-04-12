const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;

const App = uniqueTag(
  class extends Component {
    static css = [css.CSSStyleSheets.reboot,css.CSSStyleSheets.images, css.CSSStyleSheets.tables];

    render() {
      return (
        <>
        
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg img-fluid"
            width="100%"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Responsive image"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Responsive image
            </text>
          </svg>

          <div>
            <svg
              class="bd-placeholder-img rounded float-start"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 200x200"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                200x200
              </text>
            </svg>
            <svg
              class="bd-placeholder-img rounded float-start"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 200x200"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                200x200
              </text>
            </svg>
          </div>
        </>
      );
    }
  }
);
export default <App />;
