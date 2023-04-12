import { h, Component } from  "wpa";

export default class extends Component {
  data = {
    users: ["tom", "jerry", "trump"],
  };
  render() {
    return (
      <>
        <h1>User List Page</h1>
        <ul>
          {this.data.users.map((u) => (
            <li>{u}</li>
          ))}
        </ul>
      </>
    );
  }
}
