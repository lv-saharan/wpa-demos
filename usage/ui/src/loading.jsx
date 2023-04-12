const { h, define, Component } = wpa;
export default (
  <fieldset>
    <legend>Loading Effect</legend>
    <h3>
      <a href="https://juejin.cn/post/7037036742985121800#heading-1">
        Loading 的一些效果
      </a>
    </h3>
    <ol>
      <li>
        circle:
        <wp-loading name="circle" />
      </li>
      <li style="line-height:2rem;">
        circle: 大小不设定可以根据父元素大小确定
        <wp-loading name="circle" />
      </li>
      <li>
        circle: Size 1.5rem，使用rem倍数
        <wp-loading name="circle" size="1.5" color="red"/>
        <wp-loading name="circle" size="1.5" color="green"/>
        <wp-loading name="circle" size="1.5" color="blue"/>
        <wp-loading name="circle" size="1.5" color="pink"/>
      </li>
      <li>
        arrow circle:
        <wp-loading name="arrow-circle" />
      </li>
      <li>
        ball-scale:
        <wp-loading name="ball-scale" />
      </li>
      <li>
        ball-fall:
        <wp-loading name="ball-fall" />
      </li>
      <li>
        rectangle:
        <wp-loading name="rectangle" />
      </li>
    </ol>
  </fieldset>
);
