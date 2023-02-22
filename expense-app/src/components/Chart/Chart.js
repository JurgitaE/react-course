import './Chart.css';
import React from 'react';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
    return (
        <div className="chart">
            {dataPoints.map((dp) => (
                <ChartBar
                    key={dp.label}
                    value={dp.value}
                    maxValue={null}
                    label={dp.label}
                />
            ))}
        </div>
    );
};

export default Chart;
