const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;

const options = Array.from({ length: 30 }).map((v, index) => {
  return {
    value: index,
    text: "text-------" + index,
  };
});
const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets("reboot", "forms");

    render() {
      return (
        <>
          <h3>多选</h3>
          <wp-select
            values={[]}
            options={options}
            class="form-control"
          ></wp-select>
          <hr />
          <h3>多选 可搜索</h3>
          <wp-select
            searchable
            values={[]}
            options={options}
            class="form-control"
          ></wp-select>
          <hr />
          <h3>单选</h3>
          <wp-select
            searchable
            options={options}
            multiple="false"
            class="form-control"
          ></wp-select>
          <hr />
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Open this select menu</option>
            {Array.from({ length: 1000 }).map((v, index) => (
              <option>{index}</option>
            ))}
          </select>
        </>
      );
    }
  }
);
export default <App />;
