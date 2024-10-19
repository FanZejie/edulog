"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An area chart with gradient fill"

const chartConfig = {
    time: {
      label: "Time",
      color: "hsl(var(--chart-1))",
    }
  } satisfies ChartConfig



type StudyTimeType = {
  chartData:Array<{ month: string; hours: number }>
}

const StudyTime = ({chartData} : StudyTimeType) => {
  return (
    <div className="flex flex-col px-4 pt-4">
      <div className='font-bold text-2xl w-full'>Study Time</div>
     
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 24,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-time)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-time)"
                  stopOpacity={0.1}
                />
              </linearGradient>

            </defs>

            <Area
              dataKey="time"
              type="natural"
              fill="url(#fillTime)"
              fillOpacity={0.4}
              stroke="var(--color-time)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      
    </div>
  )
};

export default StudyTime;
