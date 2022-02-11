import './css/App.css';
import { useState } from 'react';
import Menu from "./Menu";
import Home from './Home/Home';
import Achievements from './Achievements/Achievements';
import TopBar from './TopBar';
import TasksListContext from './Contexts/TasksListContext';
import DoneListContext from './Contexts/DoneListContext';
import WeeklyGoalContext from './Contexts/WeeklyGoalContext';
import Uselocalstorage from './custom-hooks/useLocalStorage';

function App() {
  const [name, setName] = Uselocalstorage('name', 'Amit');
  const [activeTab, setActiveTab] = Uselocalstorage('activeTab', 'Home');
  const [tasksList, setTasksList] = Uselocalstorage ('tasksList', [])
  const [doneList, setDoneList] = Uselocalstorage('doneList', []); 
  const [weeklyGoal, setWeeklyGoal] = Uselocalstorage('weeklyGoal', 1);

  return (
    <div className='container'>
      <Menu setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className='main-container'>
        <TopBar activeTab={activeTab} />
        <DoneListContext.Provider value={[doneList, setDoneList]}>
          <div className='content-container'>
            <WeeklyGoalContext.Provider value={[weeklyGoal, setWeeklyGoal]}>
              {activeTab === 'Achievements' && <Achievements />}
            </WeeklyGoalContext.Provider>
            <TasksListContext.Provider value={[tasksList, setTasksList]}>
              {activeTab === 'Home' && <Home name={name} setName={setName} />}
            </TasksListContext.Provider>
          </div>
        </DoneListContext.Provider>
      </div>
    </div>
  );
}

export default App;
