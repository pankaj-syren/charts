
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip
} from "@visx/xychart";

import {data} from '../data';
import { scaleLinear } from "@visx/scale";

const data1 = data

// const data1 = [
//   {
//     x: "2018-03-01",
//     y: 30
//   },
//   {
//     x: "2018-04-01",
//     y: 16
//   },
//   {
//     x: "2018-05-01",
//     y: 17
//   },
//   {
//     x: "2018-06-01",
//     y: 24
//   },
//   {
//     x: "2018-07-01",
//     y: 47
//   },
//   {
//     x: "2018-08-01",
//     y: 32
//   },
//   {
//     x: "2018-09-01",
//     y: 8
//   },
//   {
//     x: "2018-10-01",
//     y: 27
//   },
//   {
//     x: "2018-11-01",
//     y: 31
//   },
//   {
//     x: "2018-12-01",
//     y: 105
//   },
//   {
//     x: "2019-01-01",
//     y: 166
//   },
//   {
//     x: "2019-02-01",
//     y: 181
//   },
//   {
//     x: "2019-03-01",
//     y: 232
//   },
//   {
//     x: "2019-04-01",
//     y: 224
//   },
//   {
//     x: "2019-05-01",
//     y: 196
//   },
//   {
//     x: "2019-06-01",
//     y: 211
//   }
// ];

const accessors = {
  xAccessor: (d: any) => d.name,
  yAccessor: (d: any) => d.uv
};

const accessors1 = {
  xAccessor: (d: any) => d.name,
  yAccessor: (d: any) => d.pv
};

const temperatureScale = scaleLinear<number>({
  domain: [
    Math.min(...data1.map((d) => Math.min(d.amt, d.amt))),
    Math.max(...data1.map((d) => Math.max(d.amt, d.amt))),
  ],
  nice: true,
});

console.log(temperatureScale , "temperatureScale")




const LineChartVisx = () => {
  return (
    <XYChart height={300} xScale={{ type: "band" }} yScale={{ type: "linear" }}>
      <AnimatedAxis orientation="bottom" />
      <AnimatedAxis orientation="left" />
      <AnimatedGrid columns={false} numTicks={2} />
      <AnimatedLineSeries dataKey="uv" data={data1} {...accessors} />
      <AnimatedLineSeries dataKey="pv" data={data1} {...accessors1} />
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }: any) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData.nearestDatum.key}
            </div>
            {accessors.xAccessor(tooltipData.nearestDatum.datum)}
            {", "}
            {accessors.yAccessor(tooltipData.nearestDatum.datum)}
          </div>
      )}
      />
    </XYChart>
  );
};

export default LineChartVisx

