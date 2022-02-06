import './css/App.css';
import { useState, createContext } from 'react';
import Menu from "./Menu";
import Home from './Home/Home';
import Settings from './Settings';
import TopBar from './TopBar';
import TasksListContext from './Contexts/TasksListContext';

function App() {
  const [name, setName] = useState('Amit');
  const [activeTab, setActiveTab] = useState('Home');
  const [tasksList, setTasksList] = useState([]);

  return (
    <div className='container'>
      <Menu setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className='main-container'>
        <TopBar activeTab={activeTab} />
        <div className='content-container'>
          {activeTab === 'Settings' && <Settings />}
          <TasksListContext.Provider value={[tasksList, setTasksList]}>
            {activeTab === 'Home' && <Home name={name} />}
          </TasksListContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
