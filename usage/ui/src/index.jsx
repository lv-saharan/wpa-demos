import {
  h,
  define,
  render,
  Component,
  classNames,
  route,
  apis,
  html,
} from "wpa";
import { icon, css } from "wpa-ui";
import ratePage from "./rate";
import tabPage from "./tab";
import iconPage from "./icon";
import pagerPage from "./pager";
import treePage from "./tree";
import indexCss from "./index.scss";
import loadingPage from "./loading";
import classesPage from "./classes";
//用图片小文件
icon.useSingleMode();
css.addStyleSheet("root");
css.preLoad()
const loadRemote = async (url) => {
  let { default: module } = await import(url);
  return module;
};
const $NOT_FOUND = <h1>没有找到该模块！</h1>;
const MODOLES = {
  home: <h1>默认首页！</h1>,
  rate: ratePage,
  tab: tabPage,
  icon: iconPage,
  pager: pagerPage,
  tree: treePage,
  loading: loadingPage,
  classes: classesPage,
};

define(
  "app-index",
  class extends Component {
    static css = [css.getCSSStyleSheets("reboot", "scrollbar"), indexCss];
    activePagePath;
    openPages = [];
    homePageKey = "home";
    controller = apis.createController("nav.json", location.href);
    routePage(page, parent) {
      let parentPath = parent?.path ?? parent?.key ?? "";
      let pagePath = `${parentPath}/${page.key}`;
      page.path = pagePath;
      let rule = pagePath;
      if (page.rule) rule += `/${page.rule}`;
      route(rule, async (evt) => {
        this.activePagePath = pagePath;
        page.params = Object.keys(evt.params ?? {}).reduce((params, key) => {
          params[key.replace(/[\?\*]$/, "")] = evt.params[key];
          return params;
        }, {});
        page.query = evt.query;
        if (!this.openPages.some((p) => p.path == pagePath)) {
          this.openPages.push(page);
        }
        this.updateSelf();
      });
    }
    routePages(pages, parent) {
      pages.forEach((page) => {
        this.routePage(page, parent);
        if (page?.children instanceof Array) {
          this.routePages(page.children, page);
        }
      });
    }
    pages = [];
    homePage = null;
    findPageByPath(pages, path) {
      for (let page of pages) {
        if (page.path == path) return page;
        if (page?.children instanceof Array) {
          let found = this.findPageByPath(page.children, path);
          if (found) {
            return found;
          }
        }
      }
      return null;
    }
    async install() {
      let pages = (this.pages = await this.controller.get());
      this.routePages(pages);
      this.homePage = pages.find((p) => p.key == this.homePageKey);
      if (this.homePage) {
        this.openPages.push(this.homePage);
        this.activePagePath = this.homePage.path;
      }
    }
    installed() {
      //異步的route第一頁會不能使用規則，需要手動route一下
      //放在insall里出现奇怪现象，会render两次
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
    closePage(path, name) {
      if (confirm(`確認關閉${name}頁？`)) {
        let index = this.openPages.findIndex((page) => page.path == path);
        this.openPages.splice(index, 1);
        if (path == this.activePagePath) {
          route.to(`${this.openPages[index - 1].path}`);
        } else {
          this.updateSelf();
        }
      }
    }
    buildNavs(pages, level = 0) {
      return (
        <ul class="navs">
          {pages.map(({ path, name, children, type, key }) => (
            <li>
              {type !== "folder" ? (
                <a
                  style={{ "padding-left": `${level}rem` }}
                  href={`#${path}`}
                  class={classNames("nav", {
                    active: this.activePagePath == path,
                  })}
                >
                  {name ?? key}
                </a>
              ) : (
                <span
                  style={{ "padding-left": `${level}rem` }}
                  class={classNames("nav", {
                    active: this.activePagePath == path,
                  })}
                >
                  {name}
                </span>
              )}

              {children instanceof Array
                ? this.buildNavs(children, level + 1)
                : null}
            </li>
          ))}
        </ul>
      );
    }
    async render() {
      let $contents = [];
      let $tabs = [];
      for (let page of this.openPages) {
        let $content = page.$content;
        if (!$content && page.url) {
          let modules = await import(page.url);
          $content = modules[page.key];
        } else {
          $content = MODOLES[page.key];
        }

        //把路由参数通过变量传递给子页面
        if ($content) {
          if ("attributes" in $content) {
            if (page.params && Object.keys(page.params).length) {
              $content.attributes = Object.assign({}, $content.attributes, {
                params: page.params,
              });
            }
            if (page.query && Object.keys(page.query).length) {
              $content.attributes = Object.assign({}, $content.attributes, {
                query: page.query,
              });
            }
          }
          $contents.push(
            <div
              // 可變數組綁定一定要指定KEY，不然dom替換時不能保存狀態
              key={page.path}
              class={classNames("content", {
                active: this.activePagePath == page.path,
              })}
            >
              {$content}
            </div>
          );

          $tabs.push(
            <li
              class={classNames("tab", {
                active: this.activePagePath == page.path,
              })}
            >
              <a href={`#${page.path}`}>
                {page.iconElement ? (
                  html([page.iconElement])
                ) : (
                  <wp-icon class="page-icon" name={page.icon ?? page.key} />
                )}
                {page.name ?? page.key}
              </a>
              {page.key == this.homePageKey ? null : (
                <wp-icon
                  size="1"
                  class="del"
                  name="close"
                  color="red"
                  onClick={(evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.closePage(page.path, page.name);
                  }}
                />
              )}
            </li>
          );
        }
      }
      return (
        <div class="container">
          <div class="left">
            <div class="pane">{this.buildNavs(this.pages)}</div>
          </div>
          <div class="right">
            <div class="pane">
              <div class="pages">
                <ul class="tabs">{$tabs}</ul>
                <div class="contents">{$contents}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);
render(<app-index></app-index>, "body");
