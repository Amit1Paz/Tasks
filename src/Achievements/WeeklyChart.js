import React, { useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import DoneListContext from '../Contexts/DoneListContext';

const WeeklyChart = () => {
    const [doneList, setDoneList] = useContext(DoneListContext);

    const labels = [];

    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate()-i);
        const day = `${d.getDate()}.${d.getMonth() + 1}`
        labels.unshift(day)
    }

    

    useEffect(() => {
        const sort = [...doneList]
        sort.map(task => {
            const d = new Date(task.dateInMs);
            console.log(d.getDay())
        })
    }, [doneList])

    return (
        <div className='weekly-chart-container'>
            <Bar 
            height={100}
            width={300}
            data={{
                labels: labels,
                datasets: [{
                    data: [],
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
