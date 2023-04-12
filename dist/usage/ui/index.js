var D=Object.defineProperty;var j=(t,a,e)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e;var v=(t,a,e)=>(j(t,typeof a!="symbol"?a+"":a,e),e);import{h as c,define as ee,render as te,Component as ae,classNames as h,route as $,apis as ie,html as ne}from"/wpa/latest/wpa.js";import{icon as le,css as B}from"/wpa-ui/latest/wpa-ui.js";var{h:p}=wpa,N=p("fieldset",null,p("legend",null,p("h1",null,"rate")),p("wp-rate",{"max-score":"6",score:"2"}),p("button",null,p("wp-rate",{"max-score":"6",score:"2.5",color:"blue",size:".8"})),p("h3",null,p("wp-rate",{score:"6","init-score":"2.4",color:"pink"})," pink rate"),p("div",null,p("wp-rate",{onRate:t=>{alert(t.detail)},score:1,rateable:!0,"max-score":"10",size:"2",color:"red"})),p("div",null,p("wp-rate",{css:`
          :host{
            --wp-icon-color:yellow;
          }
          :host .rate-1{
            --wp-icon-color:gray;
          }
          :host .rate-2{
            --wp-icon-color:yellow;
          }
          :host .rate-3{
            --wp-icon-color:green;
          }
          :host .rate-4{
            --wp-icon-color:blue;
          }
          :host .rate-5{
            --wp-icon-color:red;
            --wp-icon-width:1.1rem;
            --wp-icon-height:1.1rem;
          }
        `,onRate:t=>{alert(t.detail)},score:5,rateable:!0,"max-score":"5"})));var{h:n,Component:J,define:I}=wpa,Q;I("tab-test",(Q=class extends J{render(){return n("ul",null,n("li",null,"1"),n("li",null,"2"),n("li",null,"3"),n("li",null,"4"),n("li",null,"5"))}},v(Q,"css",`
      :host ul{
        list-style:square;
        color:red;
      }
    `),Q));var O=n("fieldset",null,n("legend",null,n("h1",null,"Tab Control")),n("wp-tab",{"active-key":"lazy","active-event":"hover",css:".nav wp-icon{display:none} .nav.active wp-icon{display:inline-block}",items:[{key:"basic",nav:"基本信息",pane:n("form",null,"基本信息设置",n("input",null),"name",n("input",{type:"radio"}),"OK?",n("input",{type:"checkbox"}),"oooooo")},{key:"position",nav:n(n.f,null,"岗位信息",n("wp-icon",{onClick:t=>alert(t),name:"close",color:"red"})),pane:n("div",null,"岗位信息岗位信息岗位信息岗位信息岗位信息")},{key:"lazy",nav:"延遲加載",pane:({update:t,vnode:a})=>a.__pane?a.__pane:(setTimeout(()=>{a.__pane=n("div",null,n("a",{href:"https://juejin.cn/post/7037036742985121800",target:"_blank"},"很多的Loading效果")),t()},1e3),n("wp-loading",{name:"rectangle",size:"5",color:"red"}))}]}),n("hr",null),n("h2",null,"Tab内部样式需要在内部完成！两种方式"),n("wp-tab",{css:`
        :host .css-pane {
          list-style: circle;
          color: blue;
        }
      `,items:[{nav:"css属性注入",pane:n("ul",{class:"css-pane"},n("li",null,"1"),n("li",null,"2"),n("li",null,"3"),n("li",null,"4"),n("li",null,"5"))},{nav:"组件化",pane:n("tab-test",null)}]}));var{h:i,define:K,Component:L,classNames:W}=wpa,{icon:k,importURL:T}=wpa.ui,q=async t=>{let{default:a}=await import(new URL(`icons/${t}.js`,T).href);return a},X=["filled","sharp","two-tone","outlined","round"];K("icon-demo",class extends L{filter="";async render(t){let{default:a}=await import(new URL("icons/filled/1k.js",T).href);return i(i.f,null,i("div",null,i("h3",null),i("input",{placeholder:"輸入關鍵字",type:"search",onKeyUp:e=>{this.filter=e.currentTarget.value,this.updateTargets("wp-tab")}})),i("wp-tab",{css:`
              :host [name="email"] {
                --wp-icon-color: blue;
              }

              ul.icons.filled svg {
                fill: red;
              }
              ul.icons.sharp svg {
                fill: orange;
              }
              ul.icons.two-tone svg {
                fill: yellow;
              }
              ul.icons.outlined svg {
                fill: green;
              }
              ul.icons.round svg {
                fill: cyan;
              }
              ul li {
                display: inline-block;
                width: 20%;
                text-align: center;
                margin-bottom: 0.5rem;
                padding: 0;
              }
              ul li div {
                overflow: hidden;
                text-overflow: clip;
              }
            `,items:[...X.map((e,l)=>({key:e,nav:e,pane:({update:m,vnode:d,component:u})=>u.activeIndex!==l?null:(d.__filter!=this.filter&&(d.__pane=null),d.__pane||(d.__filter=this.filter,q(e).then(f=>{d.__pane=i("ul",{class:W("icons",e)},Object.keys(f).filter(w=>w.includes(this.filter)).map(w=>i("li",{title:`<wp-icon name="${w}" type="${e}"/>`},i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3rem",height:"3rem",viewBox:"0 0 24 24"},f[w]),i("div",null,w)))),m()})),d.__pane??i("wp-loading",null))})),{key:"usage",nav:"用法",pane:i("div",null,i("h3",null,"樣式覆蓋"),i("wp-icon",{name:"email",css:`
                        :host svg {
                          fill: pink;
                        }
                      `}),i("hr",null),i("h3",null,"屬性設置"),i("wp-icon",{name:"1k",size:"2",color:"red"}),i("p",null,"頁簽中覆蓋了email樣式"),i("wp-icon",{name:"email",size:"2",color:"red"}),i("wp-icon",{name:"email",id:"email4",size:"4"}),i("wp-icon",{name:"email",size:".5"}),i("hr",null),i("button",null,i("wp-icon",{name:"star",type:"sharp"}),"按钮"),i("hr",null),i("h3",null,"直接使用SVG"),i("div",null,i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3em",height:"3em",viewBox:"0 0 24 24"},a),i("p",null,"icon.createSvg(name,type,mode,props)"),await k.createSvg("2k",k.TYPES.SHARP,k.MODES.SINGLE,{width:"4rem",height:"4rem",fill:"blue"})))}]}))}});var S=i("fieldset",null,i("legend",null,i("h1",null,"图标")),i("h2",null,i("a",{href:"https://marella.me/material-design-icons/demo/svg/"},"可用图标")),i("icon-demo",null));var{h:g}=wpa,z=g("div",null,g("wp-pagination",{"page-count":"100"}),g("wp-pager",{total:"1000",createInfo:(t,a)=>{let{pageNum:e}=t,{pageCount:l}=a;return g("div",{class:"info"},g("span",{class:"curr"},"當前",e),"/",g("span",{class:"total"},"總共",l))}}),g("wp-pager",{css:`
        :host {
          --wp-pager-page-bgcolor: #eee;
        }
      `,"page-count":"100","prev-text":"上一頁","next-text":"下一頁"}),g("wp-pager",{total:"100","page-num":"5"}),g("wp-pager",{total:"10","page-size":"2",onPaged:t=>{alert(t.detail)}}),g("wp-pager",{total:"1"}),Array.from({length:100}).map((t,a)=>g("div",null,g("wp-pager",{css:`
              :host {
                --wp-pager-page-bgcolor: #eee;
              }
            `,"page-count":a,"prev-text":"上一頁","next-text":"下一頁"}))));var{h:r,define:Y,Component:A}=wpa,b=[{key:"node-1",label:"節點1"},{key:"node-2",label:"節點2",expanded:!0,children:[{key:"child-1",label:"子節點1",allowCheck:!1},{key:"child-2",label:"子節點2",disabled:!0,children:[{key:"cc-1",label:"孫節點1"},{key:"cc-2",label:"孫節點2"}]}]},{key:"node3",element:r("b",null,"節點3"),children:(t,a,e)=>t.__children?t.__children:(setTimeout(()=>{t.__children=[{key:"child-3",label:"子節點1"},{key:"child-4",label:"子節點2"}],e.update()},3e3),r("wp-loading",{name:"ball-fall",size:".5",style:{"padding-left":e.level+1+"rem"}}))}],H=["child-1","node-1"],E=["node-1","child-4"],U="node-1";Y("tree-demo",class extends A{render(){return r("wp-tab",{items:[{nav:"一般用法",pane:r("wp-tree",{nodes:b})},{nav:"设置选中行",pane:r("wp-tree",{"multi-select":!0,selectedKeys:H,nodes:b,css:`
                    :host {
                      --wp-tree-node-color: red;
                    }
                  `})},{nav:"多选",pane:()=>r(r.f,null,"选中的Keys：",r("ol",null,E.map(t=>r("li",null,t))),r("hr",null),r("wp-tree",{onNodeCheck:t=>{this.updateTargets("wp-tab")},onNodeUnCheck:t=>{this.updateTargets("wp-tab")},"checkbox-tree":!0,checkedKeys:E,nodes:b}))},{nav:"单选,node 样式注入,可以是任意的可以转换成CSSStyleSheet的",pane:()=>r(r.f,null,"选中的Key：",U,r("hr",null),r("wp-tree",{"node-css":".element{font-size:3rem !important;}[type=radio]{width:3rem !important;height:3rem !important;} .expander-wrap{margin-right:1.2rem !important;}","radio-tree":!0,radioedKey:U,expander:r("wp-icon",{name:"arrow_right",size:"3",color:"blue"}),nodes:b,onNodeRadio:t=>{U=t.detail.node.key,this.updateTargets("wp-tab")}}))}]})}});var R=r("fieldset",null,r("legend",null,r("h1",null,"Tree Control")),r("tree-demo",null));var C=`
:host {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  --left-width: 20rem;
  --wp-icon-color: red;
}

.container {
  width: 100%;
  height: 100%;
}
.container .left {
  position: relative;
  width: var(--left-width);
  height: 100%;
  overflow: auto;
  background-color: #ccc;
}
.container .left .pane {
  padding: 0.5em;
}
.container .left .pane .navs {
  margin: 0;
  padding: 0;
}
.container .left .pane .navs .nav {
  list-style: none;
  line-height: 2rem;
  display: block;
  text-indent: 1rem;
  text-decoration: none;
}
.container .left .pane .navs .nav.active {
  color: rgb(21, 17, 17);
  background-color: rgb(150, 201, 235);
}
.container .left .pane .navs .nav:hover {
  background-color: rgb(127, 194, 238);
}
.container .left .pane .navs a.nav {
  color: var(--wp-primary);
}
.container .left .pane .navs span.nav {
  color: var(--wp-secondary);
}
.container .left .pane .navs .navs .nav {
  padding-left: 1rem;
}
.container .right {
  position: absolute;
  left: var(--left-width);
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}
.container .right .pane {
  padding: 1rem;
}
.container .right .pane .pages .tabs {
  display: block;
  list-style: none;
  padding: 0;
}
.container .right .pane .pages .tabs .tab {
  display: inline-block;
  padding: 0.3rem 1rem 0.1rem 0.5rem;
  line-height: 1.2rem;
  position: relative;
  user-select: none;
}
.container .right .pane .pages .tabs .tab a {
  color: black;
  text-decoration: none;
}
.container .right .pane .pages .tabs .tab.active {
  border-bottom: solid 1px #ccc;
}
.container .right .pane .pages .tabs .tab wp-icon.page-icon {
  vertical-align: middle;
}
.container .right .pane .pages .tabs .tab wp-icon.del {
  position: absolute;
  right: 0;
  top: 0.3em;
  display: none;
}
.container .right .pane .pages .tabs .tab:hover wp-icon.del {
  display: block;
}
.container .right .pane .pages .tabs .tab wp-loading {
  width: 0.9rem;
  height: 0.9rem;
}
.container .right .pane .pages .contents .content {
  display: none;
}
.container .right .pane .pages .contents .content.active {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcd3BhLWRlbW9zXFx1c2FnZVxcdWlcXHNyYyIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUlKO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTs7QUFHSjtFQUNJOztBQU1SO0VBQ0k7O0FBR0o7RUFDSTs7QUFJQTtFQUNJOztBQVNwQjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUdJO0VBQ0k7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBSUE7RUFDSTs7QUFJUjtFQUdJO0VBQ0E7O0FBT1I7RUFDSTs7QUFFQTtFQUNJIn0= */`;var{h:o,define:we,Component:be}=wpa,_=o("fieldset",null,o("legend",null,"Loading Effect"),o("h3",null,o("a",{href:"https://juejin.cn/post/7037036742985121800#heading-1"},"Loading 的一些效果")),o("ol",null,o("li",null,"circle:",o("wp-loading",{name:"circle"})),o("li",{style:"line-height:2rem;"},"circle: 大小不设定可以根据父元素大小确定",o("wp-loading",{name:"circle"})),o("li",null,"circle: Size 1.5rem，使用rem倍数",o("wp-loading",{name:"circle",size:"1.5",color:"red"}),o("wp-loading",{name:"circle",size:"1.5",color:"green"}),o("wp-loading",{name:"circle",size:"1.5",color:"blue"}),o("wp-loading",{name:"circle",size:"1.5",color:"pink"})),o("li",null,"arrow circle:",o("wp-loading",{name:"arrow-circle"})),o("li",null,"ball-scale:",o("wp-loading",{name:"ball-scale"})),o("li",null,"ball-fall:",o("wp-loading",{name:"ball-fall"})),o("li",null,"rectangle:",o("wp-loading",{name:"rectangle"}))));var{h:s,define:he,Component:M,classNames:Qe,uniqueTag:G}=wpa,{css:y,effect:F}=wpa.ui,x,Z=G((x=class extends M{installed(){let t=[{classNames:"e1",duration:2,delay:1},{classNames:"e2",duration:2},{classNames:"e3",duration:2},{classNames:"",duration:2}],a=[{classNames:"e1",duration:2,delay:1},{classNames:"e1 e2",duration:2},{classNames:"e1 e2 e3",duration:2},{classNames:"e1 e2",duration:2},{classNames:"e1",duration:2},{classNames:"",duration:2}],e=[{classNames:"e1",duration:2,delay:10},{classNames:"e1 e2 e3",duration:2,delay:10},{classNames:"",duration:2}];y.timingClassNames(this.$("#item1"),t,1/0),y.timingClassNames(this.$("#item2"),a,6),y.timingClassNames(this.$("#item3"),e,9)}render(){return s(s.f,null,s("fieldset",null,s("legend",null,"Collapse"),s("p",null,s("button",{class:"btn btn-primary",type:"button",onClick:t=>{F.collapse.toggle(this.$("#collapseExample"))}},"Button")),s("div",{id:"collapseExample",class:"col-3 collapse"},s("div",{class:"card card-body"},"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.")),s("p",null,s("button",{class:"btn btn-primary",type:"button",onClick:t=>{F.collapse.toggle(this.$("#collapseWidthExample"))}},"Toggle width collapse")),s("div",{style:"min-height: 120px;"},s("div",{class:"collapse collapse-horizontal",id:"collapseWidthExample"},s("div",{class:"card card-body",style:"width: 300px;"},"This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.")))),s("fieldset",null,s("legend",null,"Fade"),s("p",null,s("button",{class:"btn btn-primary",type:"button",onClick:t=>{F.fade.toggle(this.$("#fadeExample"))}},"Button")),s("div",{id:"fadeExample",class:"col-3"},s("div",{class:"card card-body"},"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."))),s("div",{class:"item",id:"item1"}),s("div",{class:"item",id:"item2"}),s("div",{class:"item",id:"item3"}))}},v(x,"css",[`
    .item {
        width:100px;
        height:100px;
        border:solid 1px #ccc;
        transition:all 2s;
    }
    .e1{
        width:200px;
    }
    .e2{
        height:200px;
    }
    .e3{
        background-color:red;
    }
    `,y.getCSSStyleSheets("reboot","buttons","card","grid","transitions")]),x)),V=s(Z,null);le.useSingleMode();B.addStyleSheet("root");B.preLoad();var se={home:c("h1",null,"默认首页！"),rate:N,tab:O,icon:S,pager:z,tree:R,loading:_,classes:V},P;ee("app-index",(P=class extends ae{activePagePath;openPages=[];homePageKey="home";controller=ie.createController("nav.json",location.href);routePage(t,a){let l=`${a?.path??a?.key??""}/${t.key}`;t.path=l;let m=l;t.rule&&(m+=`/${t.rule}`),$(m,async d=>{this.activePagePath=l,t.params=Object.keys(d.params??{}).reduce((u,f)=>(u[f.replace(/[\?\*]$/,"")]=d.params[f],u),{}),t.query=d.query,this.openPages.some(u=>u.path==l)||this.openPages.push(t),this.updateSelf()})}routePages(t,a){t.forEach(e=>{this.routePage(e,a),e?.children instanceof Array&&this.routePages(e.children,e)})}pages=[];homePage=null;findPageByPath(t,a){for(let e of t){if(e.path==a)return e;if(e?.children instanceof Array){let l=this.findPageByPath(e.children,a);if(l)return l}}return null}async install(){let t=this.pages=await this.controller.get();this.routePages(t),this.homePage=t.find(a=>a.key==this.homePageKey),this.homePage&&(this.openPages.push(this.homePage),this.activePagePath=this.homePage.path)}installed(){window.dispatchEvent(new HashChangeEvent("hashchange"))}closePage(t,a){if(confirm(`確認關閉${a}頁？`)){let e=this.openPages.findIndex(l=>l.path==t);this.openPages.splice(e,1),t==this.activePagePath?$.to(`${this.openPages[e-1].path}`):this.updateSelf()}}buildNavs(t,a=0){return c("ul",{class:"navs"},t.map(({path:e,name:l,children:m,type:d,key:u})=>c("li",null,d!=="folder"?c("a",{style:{"padding-left":`${a}rem`},href:`#${e}`,class:h("nav",{active:this.activePagePath==e})},l??u):c("span",{style:{"padding-left":`${a}rem`},class:h("nav",{active:this.activePagePath==e})},l),m instanceof Array?this.buildNavs(m,a+1):null)))}async render(){let t=[],a=[];for(let e of this.openPages){let l=e.$content;!l&&e.url?l=(await import(e.url))[e.key]:l=se[e.key],l&&("attributes"in l&&(e.params&&Object.keys(e.params).length&&(l.attributes=Object.assign({},l.attributes,{params:e.params})),e.query&&Object.keys(e.query).length&&(l.attributes=Object.assign({},l.attributes,{query:e.query}))),t.push(c("div",{key:e.path,class:h("content",{active:this.activePagePath==e.path})},l)),a.push(c("li",{class:h("tab",{active:this.activePagePath==e.path})},c("a",{href:`#${e.path}`},e.iconElement?ne([e.iconElement]):c("wp-icon",{class:"page-icon",name:e.icon??e.key}),e.name??e.key),e.key==this.homePageKey?null:c("wp-icon",{size:"1",class:"del",name:"close",color:"red",onClick:m=>{m.preventDefault(),m.stopPropagation(),this.closePage(e.path,e.name)}}))))}return c("div",{class:"container"},c("div",{class:"left"},c("div",{class:"pane"},this.buildNavs(this.pages))),c("div",{class:"right"},c("div",{class:"pane"},c("div",{class:"pages"},c("ul",{class:"tabs"},a),c("div",{class:"contents"},t)))))}},v(P,"css",[B.getCSSStyleSheets("reboot","scrollbar"),C]),P));te(c("app-index",null),"body");
//# sourceMappingURL=index.js.map
