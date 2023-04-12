var l=Object.defineProperty;var d=(o,e,s)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s;var p=(o,e,s)=>(d(o,typeof e!="symbol"?e+"":e,s),s);import{h as t,render as b,uniqueTag as u,Component as i}from"/wpa/latest/wpa.js";var r=`
span.key {
  color: blue;
}
span.key::after {
  content: ":";
}

h1 {
  font-size: 1.8rem;
}
h1::after {
  content: " ";
  display: block;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcd3BhLWRlbW9zXFxjb3JlXFxhdHRycy10by1wcm9wc1xcc3JjIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0k7O0FBSkE7RUFDSTs7O0FBTVI7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBIn0= */`;var n,c=u((n=class extends i{render(o){return t(t.f,null,t("b",null,"Count:",o.count),t("button",{onClick:e=>{this.updateProps({count:(o.count??0)+1}),this.update()}},"Count++"))}},p(n,"defaultProps",{}),p(n,"propTypes",{count:Number}),n)),a,y=u((a=class extends i{render(o){return t(t.f,null,t("ul",null,Object.keys(o).map(e=>t("li",null,t("span",{class:"key"},e),t("span",{class:"value"},o[e])))),t("button",{onClick:e=>{this.updateProps({props1:1,type:2})}},"0 Update Props"),t("hr",null),t(c,{count:"2"}),t("hr",null),t(c,null),t("hr",null),t("button",{onClick:e=>{this.update(),console.log("update")}},"1 Update"),t("h1",null,"Update 之后由于没在defaultProps中的设定值会“幸免”更新回去，但是CSS属性难以幸免！"),t("h1",null,"attrs to props 方法有一定的不合理性，本身应该可以支持控件在任何html文档中使用，同时也会产生各种奇怪现象。"),t("button",{onClick:e=>{this.update(!0)}},"2 Update ignoreAttrs"),t("h1",null,"这个方法不会重新读取属性。"),t("h1",null,"按照这个思路，更新props应该更新定义过的attrs，但是很多情况attrs是绑定的，一些更新又会更新attrs，进而更新props"),t("button",{onClick:e=>{this.updateProps({type:3}),this.pureSetAttribute("type",3)}},"3 Update Props and Attrs，点击 1、2 按钮 type始终是3"," "))}},p(a,"css",r),p(a,"defaultProps",{type:null}),p(a,"propTypes",{type:Number}),a));b(t(y,{type:"1",name:"app"}),"body");
//# sourceMappingURL=index.js.map
