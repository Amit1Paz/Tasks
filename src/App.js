import './css/App.css';
import { useState, createContext, useEffect } from 'react';
import Menu from "./Menu";
import Home from './Home/Home';
import Settings from './Settings';
import TopBar from './TopBar';
import TasksListContext from './Contexts/TasksListContext';
import DoneListContext from './Contexts/DoneListContext';

function App() {
  const [name, setName] = useState('Amit');
  const [activeTab, setActiveTab] = useState('Home');
  const [tasksList, setTasksList] = useState([]);
  const [doneList, setDoneList] = useState([]); 

  return (
    <div className='container'>
      <Menu setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className='main-container'>
        <TopBar activeTab={activeTab} />
        <DoneListContext.Provider value={[doneList, setDoneList]}>
          <div className='content-container'>
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
