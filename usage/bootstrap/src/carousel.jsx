const { h, define, Component, classNames, uniqueTag } = wpa;
/**
 * @file carousel
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/styles/carousel|WPA示例}
 */
export default (
  <fieldset>
    <legend>Carousel </legend>
    <pre></pre>
    <wp-carousel
      class="carousel-dark"
      style="width:20rem; outline:#00FF00 dotted thick;"
      duration="1"
      items={
        <>
          <div>
            <img
              src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
              class="d-block w-100"
              title="1"
              alt="...1"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
            class="d-block w-100"
            alt="...2"
            title="2"
          />
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
            class="d-block w-100"
            alt="...3"
            title="3"
          />
        </>
      }
    ></wp-carousel>
    <hr />
    <wp-carousel
      style="width:20rem; outline:#00FF00 dotted thick;"
      duration=".3"
      items={
        <>
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
            class="d-block w-100"
            alt="...1"
          />
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
            class="d-block w-100"
            alt="...2"
            waiting="5"
          />
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
            class="d-block w-100"
            alt="...3"
          />
        </>
      }
    ></wp-carousel>
  </fieldset>
);
