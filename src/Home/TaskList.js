import React from 'react';

const Tasklist = () => {
    const SortList = ['Name', 'Date', 'Status', 'Custom'];

    return (
        <div className='tasks-list-container'>
            <h3>Tasks:</h3>
            <div className='sort'>
                <h5>Sort:</h5>
                <ul>
                    {SortList.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Tasklist;
