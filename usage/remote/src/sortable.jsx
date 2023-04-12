import { h, Component, uniqueTag } from "wpa";
import { sortable, css } from "wpa-ui";

let nodes = [
  {
    key: "node-1",
    label: "節點1",
  },
  {
    key: "node-2",
    label: "節點2",
    expanded: true,
    children: [
      {
        key: "child-1",
        label: "子節點1",
        allowCheck: false,
      },
      {
        key: "child-2",
        label: "子節點2",
        disabled: true,
        children: [
          {
            key: "cc-1",
            label: "孫節點1",
          },
          {
            key: "cc-2",
            label: "孫節點2",
          },
        ],
      },
    ],
  },
  {
    key: "node3",
    element: <b>節點3</b>,
    children: (node, props, treeNode) => {
      if (!node.__children) {
        setTimeout(() => {
          node.__children = [
            {
              key: "child-3",
              label: "子節點1",
            },
            {
              key: "child-4",
              label: "子節點2",
            },
          ];
          treeNode.update();
        }, 3000);

        return (
          <wp-loading
            name="ball-fall"
            size=".5"
            style={{ "padding-left": treeNode.level + 1 + "rem" }}
          />
        );
      } else {
        return node.__children;
      }
    },
  },
];

const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets(
      "reboot",
      "tables",
      "utilities",
      "close",
      "scrollbar"
    );
    css = `
    .sortable-ghost{
        outline:#00FF00 dotted thick;
    }
    .sortable-drag{
        color:red;
    }
    `;
    async installed() {
      const Sortable = await sortable.use();
      Sortable.create(this.$(".table>tbody"), {
        setData: (
          /** DataTransfer */ dataTransfer,
          /** HTMLElement*/ dragEl
        ) => {
          dataTransfer.setData("item", dragEl.dataset.index); // `dataTransfer` object of HTML5 DragEvent
        },
        // Element dragging ended
        onEnd: (/**Event*/ evt) => {
          console.log(evt);
          console.log(
            "new orders",
            this.$$(".table>tbody>tr").map((tr) => tr.dataset.index)
          );
        },
      });
    }
    render() {
      return (
        <>
          <table class="table">
            <tbody>
              {Array.from({ length: 10 }).map((v, index) => (
                <tr data-index={index}>
                  <td>{index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>Sortable TREE</h1>
          <wp-tree
            nodes={nodes}
            sortable
            onDragOver={(evt) => {
              evt.dataTransfer.effectAllowed = "all";
              evt.dataTransfer.dropEffect = "move";
              //取消默认事件，才可以触发drop
              evt.preventDefault();
              console.log(evt);
            }}
            onDrop={(evt) => {
              console.log(evt);
              let node = evt.path.find((el) => el.tagName == "OI-TREE-NODE");
              if (node)
                //上面table row drop here
                console.log(
                  "drop to ",
                  node.node,
                  evt.dataTransfer.getData("item")
                );
            }}
            onSorted={(evt, target) => {
              //从from 里删除，在to里面加入即可
              console.log("tree sorted", evt);
              const { fromNodes, toNodes, fromIndex, toIndex } = evt.detail;
              const item = fromNodes[fromIndex];
              //一般情况需要保存到数据库
              fromNodes.splice(fromIndex, 1);

              toNodes.splice(toIndex, 0, item);
              target.update();
            }}
            node-css={`
              .element{font-size:2rem !important;}
              :host(.sortable-ghost)  {
                -wp-tree-node-font:2rem;
                color:blue;
              }
            
            `}
            css={`
              :host {
                --wp-tree-node-color: red;
              }
            `}
          />
        </>
      );
    }
  }
);
export default <App />;
