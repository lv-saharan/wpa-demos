import{h as e,render as c,define as o,Component as t}from"/wpa/latest/wpa.js";var p=a=>new Promise(r=>{setTimeout(()=>{r()},a*1e3)});o("wp-async-1",class extends t{async render(){return await p(1),e(e.f,null,e("h1",null,"asyc...."))}});o("wp-app",class extends t{render(){return e(e.f,null,e("h1",null,"hello,world"),e("wp-async-1",null))}});c(e("wp-app",null),"body");
//# sourceMappingURL=index.js.map
