import { BarChart as GroupBar, Bar, XAxis, YAxis, Tooltip, Legend} from "recharts";

interface BarChartRechartProps {
  width: number,
  height: number,
  data: any,
  barDetails: {
    bar: {
      dataKey: string,
      fill: string
    }[],
  },
  xAxis: {
    datakey: string;
  },
  yAxis: {
    domain: [number, number];
  },
}

export const BarChartRechart = ({ data, barDetails, height, width , xAxis , yAxis }: BarChartRechartProps) => {
  const margin = { top: 0, right: 0, left: 0, bottom: 0 };
  return (
    <GroupBar
      height={height}
      data={data}
      margin={margin}
      width={width}
    >
      <XAxis
        dataKey={xAxis.dataKey}
        fontSize={10}
      />
      <YAxis
        domain={yAxis.domain}
      />
      <Tooltip
        wrapperStyle={{ border: '1px solid red' }}
        itemStyle={{ backgroundColor: 'transparent', padding: '10px' }}
        // content={<>custom jsx</>}
        />
      <Legend />
      {barDetails && barDetails.bar.map(({ dataKey, fill }) => (
        <Bar dataKey={dataKey} fill={fill} radius={20} />
      ))}


    </GroupBar>
  );
};
