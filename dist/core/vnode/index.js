import{h as o,render as e,uniqueTag as l,Component as r,define as s}from"/wpa/latest/wpa.js";var a=123;e(o("h1",{class:"test"}," hello：",a),"body");e({nodeName:"h1",children:[()=>{},"hello",{nodeName:"span",children:[" ","world","!"],attributes:{style:{color:"blue"}}}],attributes:{style:{color:"red"}}},"body");e(o("h1",{},"hello",",","world!"),"body");var d={width:80,height:90};e(o("h1",{...d}," hello"),"body");var c=l(class extends r{render(t){return o("h1",null,t.name,":",t.msg,()=>o("h3",null,"function name(params) "),o("button",{onClick:h=>{this.updateProps({msg:"are you ok?"}),console.log(n)}},"log"))}}),n={name:"part",msg:"??"};e(o(c,{...n}),"body");s("p-100",({props:t})=>(console.log(t),o(o.f,null,o("h3",null,"hello,function"))));e(o("p-100",{...n}),"body");
//# sourceMappingURL=index.js.map
