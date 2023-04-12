import{h as e,render as l}from"/wpa/latest/wpa.js";var r=`
:root {
  --header-height: 2rem;
  --footer-height: 2rem;
}

body {
  margin: 0;
}

header {
  background-color: aqua;
  height: var(--header-height);
  width: 100%;
  position: relative;
}
header b {
  font-size: 0.6rem;
}

main {
  position: relative;
  background-color: cadetblue;
  box-sizing: content-box;
  height: calc(100vh - var(--header-height) - var(--footer-height));
  overflow: auto;
}

footer {
  background-color: aqua;
  height: var(--footer-height);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcd3BhLWRlbW9zXFxjb3JlXFxtb2JpbGVcXHNyYyIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var s=window.__wxjs_environment==="miniprogram",o=new CSSStyleSheet;o.replaceSync(r);o.insertRule(`html{font-size:${screen.width/20}px}`,0);document.adoptedStyleSheets=[o];var a=()=>{o.deleteRule(0),o.insertRule(`html{font-size:${screen.width/20}px}`,0)};window.addEventListener("orientationchange",a);window.addEventListener("resize",a);var n="";l(e(e.f,null,e("header",null,({update:i})=>(setTimeout(()=>{i()},1e3),e("b",null,"item is ",n,";time is : ",new Date().toUTCString()))),e("main",null,()=>e("ul",null,Array.from({length:100}).map((i,t)=>e("li",null,e("a",{href:`#${t}`,onClick:d=>{document.title="title:"+t,n=document.title,s?(wx.miniProgram.postMessage({data:{title:"foo"+t}}),wx.miniProgram.reLaunch()):document.title="title:"+t}},"Item:",t))))),e("footer",null,e("button",{onClick:i=>{wx.miniProgram.navigateTo({url:"/pages/logs/logs",success(t){console.log("success",t)},fail(t){console.log("fail",t)}})}},"go to logs"))),"body");
//# sourceMappingURL=index.js.map
