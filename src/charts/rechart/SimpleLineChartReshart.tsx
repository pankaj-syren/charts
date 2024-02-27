import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';


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


export const SimpleLineChartReshart = ({ LineChartDetails, data, height, width , xAxis }: LineChartRechartProps) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <>
                <LineChart
                    width={width}
                    height={height}
                    data={data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey={xAxis?.dataKey} />
                    <YAxis />
                    <Tooltip labelStyle={{ color: 'black' }} />
                    <Legend />
                    {LineChartDetails && LineChartDetails.line.map(({dataKey , fill}) => (
                        <Line type="basis" dataKey={dataKey} stroke={fill} />
                    ))}
                </LineChart>
            </>
        </ResponsiveContainer>
    );
}
