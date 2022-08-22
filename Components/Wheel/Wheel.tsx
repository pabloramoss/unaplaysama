import React from 'react';
import { VictoryPie } from 'victory';

interface WheelProps {
  choices: any;
}

const Wheel: React.FC<WheelProps> = ({choices})=> {
  const colorScale = ["blue", "red", "white", "yellow"]

  return(
    <VictoryPie
    colorScale={colorScale}
    height={600}
    width={600}
    innerRadius={50}
    data={choices}
    labelPosition="centroid"
    labelPlacement="parallel"
    labels={({ datum }) => datum.x}
    labelRadius={({ innerRadius }) => innerRadius + 5 }
    style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold"}}} 
  />
  )
}
export default Wheel