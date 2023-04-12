var a=Object.defineProperty;var h=(s,e,r)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var c=(s,e,r)=>(h(s,typeof e!="symbol"?e+"":e,r),r);import{h as t,render as o,Component as d,uniqueTag as i}from"/wpa/latest/wpa.js";var l=class extends d{style="style1";stylesheets(){return[new URL(`./css/${this.style}.css`,import.meta.url).href]}render(){return t("div",null,t("h1",null,"一段文字"),t("button",{onClick:()=>{this.style=="style1"?this.style="style2":this.style="style1",this.update()}},"Update"))}};c(l,"stylesheets",[new URL("./css/default.css",import.meta.url).href]);var m=i(l),n,f=i((n=class extends l{style="style2";stylesheets=new URL(`./css/${this.style}.css`,import.meta.url).href},c(n,"stylesheets",new URL("./css/default.css",import.meta.url).href),n)),y,b=i((y=class extends l{style="style2";stylesheets=[new URL("./css/style3.css",import.meta.url).href,()=>new URL(`./css/${this.style}.css`,import.meta.url).href];css=[`
      button{
        color:blue;
      } 
      `,()=>{let s=new Date().getHours(),e;return s<8?e="red":s<16?e="yellow":e="green",`
        button{
          background-color:${e};
        }
        `}]},c(y,"stylesheets",new URL("./css/default.css",import.meta.url).href),y)),u=new CSSStyleSheet;u.replace(`
  h1::after{
    content:'---- css style sheet!!';
    color:black;
  }
`);o(t(m,null),"body");o(t("hr",null),"body");o(t(f,null),"body");o(t(b,{cssss:u}),"body");
//# sourceMappingURL=index.js.map
