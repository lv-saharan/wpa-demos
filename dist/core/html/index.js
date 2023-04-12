import{render as m,define as n,Component as s,html as r}from"/wpa/latest/wpa.js";n("af-part-1",class extends s{css=[fetch(new URL("./css/part1.css",import.meta.url).href).then(e=>e.text())];render(){let e=[];for(let t=0;t<10;t++)e.push(r`<li>${t}</li>`);return r`<ul>
    ${e}
    </ul>
    `}});var l=0;m(({update:e})=>{let t=Math.ceil(Math.random()*20);return l++,setTimeout(()=>{e()},2e3),r`<div>
  <h3>第${l}次刷新</h3>
  <ul>
  ${Array.from({length:t}).map((a,i)=>r`<li>${i}</li>`)}
  </ul></div>
  `},"#demo2");
//# sourceMappingURL=index.js.map
