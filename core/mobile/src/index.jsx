import { h, render, define, Component } from "wpa";

import css from "./index.scss";
const IS_IN_MP = window.__wxjs_environment === "miniprogram";

const indexCSSStyleSheet = new CSSStyleSheet();
indexCSSStyleSheet.replaceSync(css);
indexCSSStyleSheet.insertRule(`html{font-size:${screen.width / 20}px}`, 0);
document.adoptedStyleSheets = [indexCSSStyleSheet];
const resetFontSize = () => {
  indexCSSStyleSheet.deleteRule(0);
  indexCSSStyleSheet.insertRule(`html{font-size:${screen.width / 20}px}`, 0);
};
window.addEventListener("orientationchange", resetFontSize);
window.addEventListener("resize", resetFontSize);
// document.title = "修改";
// if(IS_IN_MP){
//   wx.config({
//     debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
//     appId: 'wxdf0483b99fbe9a62', // 必填，公众号的唯一标识 55d448470811367ee691ee4efa411920 ,get access token url :https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxdf0483b99fbe9a62&secret=55d448470811367ee691ee4efa411920
//             //get ticket https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
//             //测试签名
//     timestamp: 1662362728, // 必填，生成签名的时间戳 秒
//     nonceStr: '231321', // 必填，生成签名的随机串
//     signature: 'b35506e9e7ba0d814183e20cf3d2a14fd7bb3986',// 必填，签名
//     jsApiList: ['getLocation'] // 必填，需要使用的 JS 接口列表
//   });
// }
let item = "";
render(
  <>
    <header>
      {({ update }) => {
        setTimeout(() => {
          update();
        }, 1000);
        return (
          <b>
            item is {item};time is : {new Date().toUTCString()}
          </b>
        );
      }}
    </header>
    <main>
      {() => {
        return (
          <ul>
            {Array.from({ length: 100 }).map((v, index) => (
              <li>
                <a
                  href={`#${index}`}
                  onClick={(evt) => {
                    document.title = "title:" + index;
                    item = document.title;
                    if (IS_IN_MP) {
                      //必须用data属性
                      wx.miniProgram.postMessage({
                        data: { title: "foo" + index },
                      });
                      // wx.miniProgram.navigateTo({ url: "/pages/logs/logs" });
                      wx.miniProgram.reLaunch();
                    } else {
                      document.title = "title:" + index;
                    }
                  }}
                >
                  Item:{index}
                </a>
              </li>
            ))}
          </ul>
        );
      }}
    </main>
    <footer>
      <button
        onClick={(evt) => {
          wx.miniProgram.navigateTo({
            url: "/pages/logs/logs",
            success(e) {
              console.log("success", e);
            },
            fail(e) {
              console.log("fail", e);
            },
          });
        }}
      >
        go to logs
      </button>
    </footer>
  </>,
  "body"
);
