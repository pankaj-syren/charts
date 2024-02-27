import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

import { data } from "../data"


export const SimpleLineChartReshart = () => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <>
                <LineChart
                    width={1200}
                    height={500}
                    data={data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip labelStyle={{ color: 'black' }} />
                    <Legend />
                    <Line type="monotone" dataKey='pv' stroke="#8884d8" />
                    <Line type="monotone" dataKey='uv' stroke="#82ca9d" />
                </LineChart>
            </>
        </ResponsiveContainer>
    );
}
