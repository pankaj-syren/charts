
import {
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  Axis
} from "@visx/xychart";


interface LineChartRechartProps {
  width: number,
  height: number,
  data: any,
  LineChartDetails: {
    line: {
      dataKey: string,
      fill: string
    }[],
  },
  xAxis?: { dataKey: string },
}

const accessors = (dataKey: string) => {
  return {
    xAccessor: (d: any) => d.name,
    yAccessor: (d: any) => d[dataKey]
  }
}

const LineChartVisx = ({ LineChartDetails, data, height, width, }: LineChartRechartProps) => {
  return (
    <XYChart height={height} width={width} xScale={{ type: "point" }} yScale={{ type: "linear" }}>
      <Axis orientation="bottom" />
      <Axis orientation="left" />
      {LineChartDetails && LineChartDetails.line.map(({ dataKey }) => (
        <AnimatedLineSeries dataKey={dataKey} data={data} {...accessors((dataKey))} />
      ))}
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={
          ({ tooltipData, colorScale }: any) =>
            <div>
              <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
                {tooltipData.nearestDatum.key}
              </div>
              {accessors(tooltipData.nearestDatum.key).xAccessor(tooltipData.nearestDatum.datum)}
              {", "}
              {accessors(tooltipData.nearestDatum.key).yAccessor(tooltipData.nearestDatum.datum)}
            </div>
        }
      />
    </XYChart>
  );
};

export default LineChartVisx

