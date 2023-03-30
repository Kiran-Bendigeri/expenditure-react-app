import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalmax = Math.max(...dataPointValue);


    return <div className="chart">
        {props.dataPoints.map(dataPoint => (
            <ChartBar 
                key={dataPoint.lable}
                value={dataPoint.value}
                maxValue={totalmax}
                lable={dataPoint.lable}
            />
        ))}
        
    </div>
}

export default Chart;