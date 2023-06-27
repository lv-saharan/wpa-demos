import { h, Component, uniqueTag } from "wpa";

var option = {
  title: {
    text: "ECharts 入门示例",
  },
  tooltip: {},
  legend: {
    data: ["销量"],
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

const option2 = {
  xAxis: {
    type: "category",
    data: ["A", "B", "C"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150],
      type: "line",
    },
  ],
};

const option3 = {
  series: [
    {
      type: "pie",
      data: [
        {
          value: 100,
          name: "A",
        },
        {
          value: 200,
          name: "B",
        },
        {
          value: 300,
          name: "C",
        },
        {
          value: 400,
          name: "D",
        },
        {
          value: 500,
          name: "E",
        },
      ],
      roseType: "area",
    },
  ],
};

const option4 = {
  xAxis: {
    data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  yAxis: {},
  series: [
    {
      type: "scatter",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
};
/**
 * @file echart
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/echarts|WPA示例}
 */
const Part = uniqueTag(
  class extends Component {
    render() {
      return (
        <div>
          <fieldset>
            <legend>demo1</legend>
            <wp-echarts props={option} style="height:200px"></wp-echarts>
          </fieldset>
          <hr />
          <fieldset>
            <legend>demo2</legend>
            <wp-echarts props={option2} style="height:200px"></wp-echarts>
          </fieldset>
          <hr />
          <fieldset>
            <legend>demo3</legend>
            <wp-echarts props={option3} style="height:200px"></wp-echarts>
          </fieldset>
          <hr />
          <fieldset>
            <legend>demo4</legend>
            <wp-echarts props={option4} style="height:200px"></wp-echarts>
          </fieldset>
          <hr />
        </div>
      );
    }
  }
);

export default <Part />;
