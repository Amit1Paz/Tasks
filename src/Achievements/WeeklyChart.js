import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const WeeklyChart = () => {
    const labels = [];

    for (let i = 0; i < 10; i++) {
        const d = new Date();
        d.setDate(d.getDate()-i);
        let day = d.getDate();
        if (day === 1) {
            day = `${d.getDate()}.${d.getMonth() + 1}`
        }
        labels.unshift(day)
    }

    return (
        <div>
            <Bar 
            height={100}
            width={400}
            data={{
                labels: labels,
                datasets: [{
                    label: '',
                    data: [12, 19, 0, 5, 2, 3],
                    backgroundColor: 'rgb(99, 99, 99)',
                    borderColor: 'rgb(204, 204, 204)',
                    borderWidth: 1,  
                }],
            }}
            options={{
                responsive: true
            }}
            />
        </div>
    );
}

export default WeeklyChart;
