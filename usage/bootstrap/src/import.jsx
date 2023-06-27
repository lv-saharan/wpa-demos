const { h, define, Component, classNames, uniqueTag, createRef } = wpa;
/**
 * @file import
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/styles/import|WPA示例}
 */
export default (
  <fieldset style="height:500px">
    <legend>导入 </legend>
    <wp-import src={new URL("../remote/index.js", import.meta.url).href} module="welcome" />
    <hr />
    <wp-import src={new URL("../remote/index.js", import.meta.url).href} module="user" />
    <hr />
  </fieldset>
);
