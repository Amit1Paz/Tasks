import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const WeeklyChart = () => {
    const labels = [];

    for (let i = 0; i < 10; i++) {
        const d = new Date();
        d.setDate(d.getDate()-i);
        const day = `${d.getDate()}.${d.getMonth() + 1}`
        labels.unshift(day)
    }

    return (
        <div className='weekly-chart-container'>
            <Bar 
            height={100}
            width={300}
            data={{
                labels: labels,
                datasets: [{
                    data: [12, 19, 0, 5, 2, 3],
                    backgroundColor: 'rgb(99, 99, 99)',
                    borderColor: 'rgb(204, 204, 204)',
                    borderWidth: 1,  
                }],
            }}
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
            />
        </div>
    );
}

export default WeeklyChart;
