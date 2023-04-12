var b=Object.defineProperty;var a=(r,e,n)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var s=(r,e,n)=>(a(r,typeof e!="symbol"?e+"":e,n),n);import{h as o,render as A,Component as i,uniqueTag as u,setTheme as c}from"/wpa/latest/wpa.js";var t=class extends i{render(){return o("div",null,o("h1",null,"APP1 "))}};s(t,"css",`
  h1{
    color:red ;
  }
  `);var m=u(t),d,P=u((d=class extends i{render(){return o(o.f,null,o(m,null),o("h1",null,"APP2 "))}},s(d,"css",`
  h1{
    color:blue ;
  }
  `),d)),l,x=u((l=class extends t{render(){return o(o.f,null,o(P,null),o("h1",null,"APP3 "),o("button",{onClick:()=>c(`
        h1{
          color:red ;
        }
      `)},"红色"),o("button",{onClick:()=>c(`
        h1{
          color:blue ;
        }
      `)},"蓝色"),o("button",{onClick:()=>c(`
        h1{
          color:green ;
        }
        :host(${P}) h1{
          border:solid 1px red;
        }
      `)},"绿色"))}},s(l,"css",`
  h1{
    color:green ;
  }
  `),l));A(o(x,null),"body");
//# sourceMappingURL=index.js.map
