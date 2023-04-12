import{h as e,render as t,define as c,Component as s}from"/wpa/latest/wpa.js";var r=`
:host h1 {
  color: blue;
}
:host [data-pre]::before {
  content: attr(data-pre) " ";
}
:host [data-color] {
  color: attr(data-color color, black);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcd3BhLWRlbW9zXFxjb3JlXFxiYXNpY1xcc3JjIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJIn0= */`;var p="_blank";t(e("h1",null,"hello,",e("a",{href:"213",target:p},"qwe"),e("hr",null),e("span",{"data-pre":"hello"},"world")),"body");var a=class extends s{css=r;changeName(o){this.updateProps({name:o})}render(o){return e("h1",null,"hi:",o.name,e("span",{"data-pre":"hello","data-color":"blue"},"world"))}};c("wp-c0",a);t(e("wp-c0",{name:"test-c0",css:"*{color:red}"}),"body");c("wp-c1",class extends a{css=`
        h1{
            color:red;
        }  
    `});t(e("wp-c1",{name:"test-c1"}),"body");
//# sourceMappingURL=index.js.map
