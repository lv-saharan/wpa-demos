import {
  h,
  render,
  define,
  Component,
  route,
} from "wpa";
import homePage from "./home.jsx";
import aboutPage from "./about.jsx";
import userListPage from "./user-list.jsx";
define("my-home", homePage);
define("my-about", aboutPage);
define("user-list", userListPage);

define(
  "my-app",
  class extends Component {
    data = { tag: "my-home" };

    install() {
      route("/", () => {
        this.data.tag = "my-home";
        this.update();
      });

      route("/about", (evt) => {
        console.log(evt.query);
        this.data.tag = "my-about";
        this.update();
      });

      route("/user-list", () => {
        this.data.tag = "user-list";
        this.update();
      });

      route("/user/:name/category/:category", (evt) => {
        this.data.tag = "my-user";
        this.data.params = evt.params;
        this.update();
      });

      route("*", function () {
        console.log("not found");
      });

      route.before = (evt) => {
        console.log("before");
        //prevent route when return false
        //return false
      };

      route.after = (evt) => {
        console.log("after");
      };
    }

    onClick = () => {
      route.to("/user/vorshen/category/html");
    };

    render() {
      const data = this.data;
      return (
        <div>
          <ul>
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/about">About</a>
            </li>
            <li>
              <a href="#/user-list">UserList</a>
            </li>
            <li>
              <a href="#/about?name=dntzhang&age=18">About Dntzhang</a>
            </li>
          </ul>
          <div id="view">
            <data.tag params={data.params} />
          </div>
          <div>
            <button onClick={this.onClick}>Test route.to</button>
          </div>
        </div>
      );
    }
  }
);

render(<my-app />, "body");
