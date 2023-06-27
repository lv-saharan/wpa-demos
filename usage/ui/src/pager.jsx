const { h } = wpa;
/**
 * @file pager
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/pager|WPA示例}
 */
export default (
  <div>
    <wp-pagination page-count="100" />
    <wp-pager
      total="1000"
      createInfo={(props, pager) => {
        let { pageNum } = props;
        let { pageCount } = pager;
        return (
          <div class="info">
            <span class="curr">當前{pageNum}</span>/
            <span class="total">總共{pageCount}</span>
          </div>
        );
      }}
    />
    <wp-pager
      css={`
        :host {
          --wp-pager-page-bgcolor: #eee;
        }
      `}
      page-count="100"
      prev-text="上一頁"
      next-text="下一頁"
    />

    <wp-pager total="100" page-num="5" />
    <wp-pager
      total="10"
      page-size="2"
      onPaged={(evt) => {
        alert(evt.detail);
      }}
    />
    <wp-pager total="1" />
    {Array.from({ length: 100 }).map((v, i) => {
      return (
        <div>
          <wp-pager
            css={`
              :host {
                --wp-pager-page-bgcolor: #eee;
              }
            `}
            page-count={i}
            prev-text="上一頁"
            next-text="下一頁"
          />
        </div>
      );
    })}
  </div>
);
