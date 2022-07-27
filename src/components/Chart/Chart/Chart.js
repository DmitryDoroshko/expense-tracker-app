import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";

const Chart = ({dataPoints}) => {
  const dataPointsValues = dataPoints.map(dataPoint => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointsValues);

  return <div className="chart">
    {dataPoints.map(dataPoint => {
      return <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
    })}
  </div>
};

export default Chart;