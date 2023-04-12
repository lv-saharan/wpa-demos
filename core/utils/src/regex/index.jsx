import {
  h,
  Component,
  createRef,
  uniqueTag,
} from "wpa";
import "wpa-ui";
import css from "./index.scss";
const RegexHandlers = {
  "bootstrap-button-css": {
    regex: "(--wp-btn-)([^:]*):([^;]*)",
    replacer: "$1$2:var($1primary-$2, $3)",
    handle: (inVal, regex, replacer) => {
      let r = new RegExp(regex);
      let rules = inVal?.split(";");
      return rules
        .filter((rule) => !/^\s*$/.test(rule))
        .map((rule) => {
          console.log(r.exec(rule));
          return rule.replace(r, replacer);
        })
        .join(";");
    },
  },
  "bootstrap-button-css-var": {
    regex: "(--wp-btn-)([^:]*):([^;]*)",
    replacer: "$1primary-$2: $3",
    handle: (inVal, regex, replacer) => {
      let r = new RegExp(regex);
      let rules = inVal?.split(";");
      return rules
        .filter((rule) => !/^\s*$/.test(rule))
        .map((rule) => {
          console.log(r.exec(rule));
          return rule.replace(r, replacer);
        })
        .join(";");
    },
  },
};
let App = uniqueTag(
  class extends Component {
    static css = css;
    inRef = createRef();
    outRef = createRef();
    regRef = createRef();
    regexRef = createRef();
    replacerRef = createRef();
    get currReg() {
      return "bootstrap-button-css";
    }
    useReg(reg) {
      let handler = RegexHandlers[reg];
      this.regexRef.current.value = handler.regex;
      this.replacerRef.current.value = handler.replacer;
    }
    run() {
      let reg = this.regRef.current.value;
      let inVal = this.inRef.current.value;

      this.outRef.current.value = RegexHandlers[reg].handle(
        inVal,
        this.regexRef.current.value,
        this.replacerRef.current.value
      );
    }
    render() {
      return (
        <>
          <select
            ref={this.regRef}
            onChange={(evt) => this.useReg(evt.target.value)}
          >
            {Object.keys(RegexHandlers).map((key) => (
              <option>{key}</option>
            ))}
          </select>
          <button
            onClick={(evt) => {
              this.run();
            }}
          >
            Run
          </button>
          <div>
            <label htmlFor="">
              REGEX :
              <input
                ref={this.regexRef}
                value={RegexHandlers[this.currReg].regex}
              />
            </label>
            <label htmlFor="">
              Replacer:
              <input
                ref={this.replacerRef}
                value={RegexHandlers[this.currReg].replacer}
              />
            </label>
          </div>

          <table width="100%">
            <tr>
              <td width="50%">
                <textarea ref={this.inRef}></textarea>
              </td>
              <td>
                <textarea ref={this.outRef}></textarea>
              </td>
            </tr>
          </table>
        </>
      );
    }
  }
);
export default <App />;
