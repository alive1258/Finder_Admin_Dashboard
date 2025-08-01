"use client";
import React, { PureComponent } from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 1400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2400,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 1700,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2880,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 2090,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 3290,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page G",
    uv: 2590,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page H",
    uv: 3790,
    pv: 4300,
    amt: 2100,
  },
];

export default class UserData extends PureComponent {
  render() {
    return (
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={200}
            height={40}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            {/* Define gradient here */}
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#41B3A2"
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
