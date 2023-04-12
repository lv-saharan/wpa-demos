import { h, render, Component, uniqueTag } from "wpa";

const Part1 = uniqueTag(
  class extends Component {
    static defaultProps = {
      name: null,
      count: null,
    };
    static propTypes = {
      name: String,
      count: Number,
    };



   
    render() {
      let { name, count } = this.$props;
      return (
        <div>
          <ul>
            <li>name is :{name}</li>
            <li>count is :{count}</li>
          </ul>
          <button
            onClick={(evt) => {
              let data = {
                name: `${name} 更新`,
                count: count + 1,
              };
              Object.assign(this.$props, data);
              this.updateProps(data);
            }}
          >
            Update {name}
          </button>
        </div>
      );
    }
  }
);
const App = uniqueTag(
  class extends Component {
    partSettings = {
      name: "Part 3",
      count: 99,
    };
    render() {
      return (
        <>
          <Part1 name="组件1" count="10" />
          <Part1 settings={{ name: "组件2", count: 100 }} />
          <Part1 settings={this.partSettings} />
          <code>
            part settings: name is {this.partSettings.name},count is{" "}
            {this.partSettings.count}
          </code>
          <hr />
          <button
            onClick={(evt) => {
              this.update();
            }}
          >
            Update App
          </button>

          <button
            onClick={(evt) => {
              this.updateSelf();
            }}
          >
            Update App Self
          </button>

          <button
            onClick={(evt) => {
              this.forceUpdate();
            }}
          >
            Update App Ignore Attrs
          </button>
        </>
      );
    }
  }
);

render(<App />, "body");
