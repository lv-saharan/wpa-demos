const { h, define, Component, classNames, uniqueTag } = wpa;
const { css } = wpa.ui;

const App = uniqueTag(
  class extends Component {
    static css = [
      css.CSSStyleSheets.reboot,
      css.CSSStyleSheets.utilities,
      css.CSSStyleSheets.tables,
    ];

    render() {
      return (
        <>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">用户编号</th>
                <th scope="col">用户名称</th>
                <th scope="col">用户昵称</th>
                <th scope="col">部门</th>
                <th scope="col">状态</th>
                <th scope="col">创建时间</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Default</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>

              <tr class="table-primary">
                <th scope="row">Primary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row">Secondary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Success</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-danger">
                <th scope="row">Danger</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-warning">
                <th scope="row">Warning</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-info">
                <th scope="row">Info</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-light">
                <th scope="row">Light</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-dark">
                <th scope="row">Dark</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </>
      );
    }
  }
);
export default <App />;
