import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';

import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';

import { withTooltip } from '@visx/tooltip';
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { localPoint } from "@visx/event";

interface BarChartVisxProps {
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
    dataKey: string;
  },
  yAxis: {
    domain: [number, number];
  },
}

const BarChartVisx = ({ data, height, width, barDetails, xAxis, yAxis }: BarChartVisxProps) => {
  const { bar} = barDetails;

  const xScale: any = scaleBand({
    range: [0, width],
    domain: data.map((d: any) => d[xAxis.dataKey]),
  });

  const yScale = scaleLinear({
    range: [height, 0],
    domain: yAxis.domain,
  });

  const barWidth = xScale.bandwidth();

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip
  }: any = useTooltip();
  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    scroll: true
  });
  const handleMouse = (event: any, datum: any) => {
    const coords = localPoint(event.target.ownerSVGElement, event);
    showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: datum
    });
  };

  return (
    <div >
      <svg
        ref={containerRef}
        width={width + 100}
        height={height + 100}
      >
        <Group left={70}  top={70} >
          {data.map((d: any) => (
            bar.map((barDetail: any) => (
              <React.Fragment key={`${d[xAxis.dataKey]}-${barDetail.dataKey}`}>
                <Bar
                  x={xScale(d[xAxis.dataKey]) + (barWidth + 5) / barDetails.bar.length * bar.indexOf(barDetail)}
                  y={yScale(d[barDetail.dataKey])}
                  width={barWidth / barDetails.bar.length}
                  height={height - yScale(d[barDetail.dataKey])}
                  fill={barDetail.fill}
                  onMouseOver={(event) => handleMouse(event, d)}
                  onMouseOut={hideTooltip}
                  ry={20}
                  rx={20}
                />
              </React.Fragment>
            ))
          ))}
          <AxisBottom
            scale={xScale}
            top={height}
            // tickLabelProps={() => ({ textAnchor: 'middle', fontSize: 10 })}
          />
          <AxisLeft
            scale={yScale}
          />
        </Group>
        {tooltipOpen && (
          <TooltipInPortal
            top={tooltipTop}
            left={tooltipLeft}
          >
            {JSON.stringify(tooltipData)}
          </TooltipInPortal>
        )}
      </svg>
    </div>
  );
};

const BarChartWithTooltip = withTooltip(BarChartVisx);
export default BarChartWithTooltip;
