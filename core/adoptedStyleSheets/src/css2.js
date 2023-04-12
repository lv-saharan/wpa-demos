export default `
    div div{
        border-bottom:1px solid red;
    }
    div div::after{
        content:'【异步导入的样式加入的！】';
        background-color:#334455;
    }
`