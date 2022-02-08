import './css/App.css';
import { useState } from 'react';
import Menu from "./Menu";
import Home from './Home/Home';
import Achievements from './Achievements/Achievements';
import Settings from './Settings';
import TopBar from './TopBar';
import TasksListContext from './Contexts/TasksListContext';
import DoneListContext from './Contexts/DoneListContext';
import WeeklyGoalContext from './Contexts/WeeklyGoalContext';

function App() {
  const [name, setName] = useState('Amit');
  const [activeTab, setActiveTab] = useState('Home');
  const [tasksList, setTasksList] = useState([]);
  const [doneList, setDoneList] = useState([]); 
  const [weeklyGoal, setWeeklyGoal] = useState(1);

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
            {activeTab === 'Settings' && <Settings />}
            <TasksListContext.Provider value={[tasksList, setTasksList]}>
              {activeTab === 'Home' && <Home name={name} />}
            </TasksListContext.Provider>
          </div>
        </DoneListContext.Provider>
      </div>
    </div>
  );
}

export default App;
