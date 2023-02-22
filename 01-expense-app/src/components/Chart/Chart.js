import './Chart.css';
import React from 'react';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(v => v.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {dataPoints.map(dp => (
                <ChartBar
                    key={dp.label}
                    value={dp.value}
                    maxValue={totalMaximum}
                    label={dp.label}
                />
            ))}
        </div>
    );
};

export default Chart;
