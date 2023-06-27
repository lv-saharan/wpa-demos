const { h } = wpa;
/**
 * @file rate
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/rate|WPA示例}
 */
export default (
  <fieldset>
    <legend>
      <h1>rate</h1>
    </legend>
    <wp-rate max-score="6" score="2" />
    <button>
      <wp-rate max-score="6" score="2.5" color="blue" size=".8" />
    </button>
    <h3>
      <wp-rate score="6" init-score="2.4" color="pink" /> pink rate
    </h3>
    <div>
      <wp-rate
        // onTryRate={(e) => {
        //   console.log("try rate", e.detail);
        // }}
        onRate={(e) => {
          alert(e.detail);
        }}
        score={1}
        rateable
        max-score="10"
        size="2"
        color="red"
      ></wp-rate>
    </div>

    <div>
      <wp-rate
        css={`
          :host{
            --wp-icon-color:yellow;
          }
          :host .rate-1{
            --wp-icon-color:gray;
          }
          :host .rate-2{
            --wp-icon-color:yellow;
          }
          :host .rate-3{
            --wp-icon-color:green;
          }
          :host .rate-4{
            --wp-icon-color:blue;
          }
          :host .rate-5{
            --wp-icon-color:red;
            --wp-icon-width:1.1rem;
            --wp-icon-height:1.1rem;
          }
        `}
        onRate={(e) => {
          alert(e.detail);
        }}
        score={5}
        rateable
        max-score="5"
      ></wp-rate>
    </div>
  </fieldset>
);
