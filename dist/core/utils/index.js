var g=Object.defineProperty;var f=(e,r,a)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a;var o=(e,r,a)=>(f(e,typeof r!="symbol"?r+"":r,a),a);import{h as p,render as h,Component as v,uniqueTag as F}from"/wpa/latest/wpa.js";import"/wpa-ui/latest/wpa-ui.js";import{h as t,Component as m,createRef as n,uniqueTag as b}from"/wpa/latest/wpa.js";import"/wpa-ui/latest/wpa-ui.js";var c=`
select {
  width: 30rem;
  margin: 1rem 0;
}

textarea {
  width: 100%;
  height: 25rem;
}

table td {
  padding-right: 2rem;
}

label {
  display: block;
}
label input {
  width: 50rem;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcd3BhLWRlbW9zXFxjb3JlXFx1dGlsc1xcc3JjXFxyZWdleCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTs7O0FBSUE7RUFDSTs7O0FBSVI7RUFDSTs7QUFDQTtFQUNJIn0= */`;var i={"bootstrap-button-css":{regex:"(--wp-btn-)([^:]*):([^;]*)",replacer:"$1$2:var($1primary-$2, $3)",handle:(e,r,a)=>{let s=new RegExp(r);return(e?.split(";")).filter(l=>!/^\s*$/.test(l)).map(l=>(console.log(s.exec(l)),l.replace(s,a))).join(";")}},"bootstrap-button-css-var":{regex:"(--wp-btn-)([^:]*):([^;]*)",replacer:"$1primary-$2: $3",handle:(e,r,a)=>{let s=new RegExp(r);return(e?.split(";")).filter(l=>!/^\s*$/.test(l)).map(l=>(console.log(s.exec(l)),l.replace(s,a))).join(";")}}},u,x=b((u=class extends m{inRef=n();outRef=n();regRef=n();regexRef=n();replacerRef=n();get currReg(){return"bootstrap-button-css"}useReg(e){let r=i[e];this.regexRef.current.value=r.regex,this.replacerRef.current.value=r.replacer}run(){let e=this.regRef.current.value,r=this.inRef.current.value;this.outRef.current.value=i[e].handle(r,this.regexRef.current.value,this.replacerRef.current.value)}render(){return t(t.f,null,t("select",{ref:this.regRef,onChange:e=>this.useReg(e.target.value)},Object.keys(i).map(e=>t("option",null,e))),t("button",{onClick:e=>{this.run()}},"Run"),t("div",null,t("label",{htmlFor:""},"REGEX :",t("input",{ref:this.regexRef,value:i[this.currReg].regex})),t("label",{htmlFor:""},"Replacer:",t("input",{ref:this.replacerRef,value:i[this.currReg].replacer}))),t("table",{width:"100%"},t("tr",null,t("td",{width:"50%"},t("textarea",{ref:this.inRef})),t("td",null,t("textarea",{ref:this.outRef})))))}},o(u,"css",c),u)),d=t(x,null);var j=F(class extends v{render(){return p(p.f,null,p("wp-tab",{items:[{nav:"正则替换",pane:d}]}))}});h(p(j,null),"body");
//# sourceMappingURL=index.js.map
