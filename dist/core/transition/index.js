var c=Object.defineProperty;var r=(t,s,e)=>s in t?c(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var a=(t,s,e)=>(r(t,typeof s!="symbol"?s+"":s,e),e);import{h as n,render as d,uniqueTag as l,Component as h,classNames as m}from"/wpa/latest/wpa.js";var o=`
.item {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  transition: all 2s;
}

.s1 {
  height: 200px;
}

.s2 {
  background-color: aquamarine;
}

.s3 {
  width: 200px;
  height: 200px;
  background-color: rgb(231, 7, 104);
  transition: all 5s;
}

.s4 {
  transform: translateX(100px);
  transition: all 2s;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcd3BhLWRlbW9zXFxjb3JlXFx0cmFuc2l0aW9uXFxzcmMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBSUo7RUFDSTs7O0FBR0o7RUFDSTs7O0FBSUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTtFQUNBIn0= */`;var i,p=l((i=class extends h{classes=[{names:"",seconds:2},{names:"s1 s2",seconds:2},{names:"s3",seconds:5},{names:"s3 s4",seconds:2}];index=0;run(){this.index=this.index%this.classes.length;let{names:t,seconds:s}=this.classes[this.index];this.currClasses=t,this.index++,setTimeout(()=>{this.update(),this.run()},s*1e3)}install(){this.run()}render(){return n("div",null,n("div",{className:m("item",this.currClasses)}))}},a(i,"css",o),i));d(n(p,null),"body");
//# sourceMappingURL=index.js.map
