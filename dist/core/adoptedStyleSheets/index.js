var u=Object.defineProperty;var m=(c,s,t)=>s in c?u(c,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[s]=t;var a=(c,s,t)=>(m(c,typeof s!="symbol"?s+"":s,t),t);import{h as e,render as S,Component as l,uniqueTag as n}from"/wpa/latest/wpa.js";var d=new CSSStyleSheet;d.replaceSync(`
    
    div div{
        background-color:#ccc;
        margin:1rem 0;
        line-height:2.5;
    }
`);var i=new CSSStyleSheet;i.replaceSync(`
    span{
        color:red;
    }
    span::after{
        content:"[模块预定义的公用样式导入]";
        background-color:#aabb00;

    }
`);var p=[d,i];var r=`
:host {
  background: url(assets/images/face0.jpg);
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcd3BhLWRlbW9zXFxjb3JlXFxhZG9wdGVkU3R5bGVTaGVldHNcXHNyY1xcY3NzIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQSJ9 */`;console.log(r);var v="./src/css2.js",b=new CSSStyleSheet;b.replaceSync(`
  .css-stylesheet{
    color:green;
  }
`);var o,h=n((o=class extends l{render(){return e("div",null,e("div",{class:"str"},"css 字符串"),e("div",{class:"func"},"css 函数"),e("div",{class:"css-stylesheet"},"css CSSStyleSheet,这其实有一定用处，当页面组建中大量零散的重用样式就可以共享，而不用重新创建。",e("span",null,"比如：button、form、等等的以创建好，然后组合使用。")))}},a(o,"css",[r,`.str{
      color:blue;
    }
    `,()=>`
    .func{
      color:red;
    }
    `,async()=>import(v),b,[p]]),o));S(e(h,{css:":host button{color:blue}"}),"body");var y=n(class extends l{render(){return e("h1",null,"Part1")}}),g=n(class extends l{render(){return e("div",null,e(y,null),e("h1",null,"Par2"))}});S(e("div",null,e("hr",null),e(y,{"theme-css":"h1{color:red;}"}),e(g,{"theme-css":"h1{color:blue;}"})),"body");
//# sourceMappingURL=index.js.map
