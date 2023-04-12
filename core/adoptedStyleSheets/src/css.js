let divStyle = new CSSStyleSheet()
divStyle.replaceSync(`
    
    div div{
        background-color:#ccc;
        margin:1rem 0;
        line-height:2.5;
    }
`)
let spanStyle = new CSSStyleSheet()
spanStyle.replaceSync(`
    span{
        color:red;
    }
    span::after{
        content:"[模块预定义的公用样式导入]";
        background-color:#aabb00;

    }
`)
//多种组合
export const basicStyle = [divStyle, spanStyle]
export {
    divStyle,
    spanStyle
}