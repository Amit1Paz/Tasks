import React, { useEffect, useContext, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import DoneListContext from '../Contexts/DoneListContext';

const WeeklyChart = () => {
    const [doneList, setDoneList] = useContext(DoneListContext);
    const [groupedTasks, setGroupedTasks] = useState({});
    const [chartData, setChartData] = useState([]);

    const labels = [];

    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate()-i);
        const day = `${d.getDate()}.${d.getMonth() + 1}`
        labels.unshift(day)
    }

    useEffect(() => {
        setGroupedTasks(doneList.reduce((groupedTasks, task) => {
            const d = new Date(task.dateInMs);
            const date = `${d.getDate()}.${d.getMonth() + 1}`
            if (groupedTasks[date] == null) {
                groupedTasks[date] = [];
            }
            groupedTasks[date].push(task);
            return groupedTasks;
        }, {}))
    }, [doneList])
    
    useEffect(() => {
        labels.map(date => {
            if (groupedTasks[date]) {
                chartData.push(groupedTasks[date].length);
            } else {
                chartData.push(null);
            }
        })
        setChartData(chartData.slice(-7));
    }, [groupedTasks])
    

    return (
        <div className='weekly-chart-container'>
            <Bar 
            height={100}
            width={300}
            data={{
                labels: labels,
                datasets: [{
                    data: chartData,
                    backgroundColor: 'rgb(99, 99, 99)',
                    borderColor: 'rgb(204, 204, 204)',
                    borderWidth: 1,
                    maxBarThickness: 20
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
