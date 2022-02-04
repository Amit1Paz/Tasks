import './css/App.css';
import { useState, useContext, useEffect } from 'react';
import Menu from "./Menu";
import Home from './Home/Home';
import Settings from './Settings';
import TopBar from './TopBar';

function App() {
  const [name, setName] = useState('Amit');
  const [activeTab, setActiveTab] = useState('Home');
  const [tasksList, setTasksList] = useState([{index: 'taskIndex0', content: 'amit', date: '30.09.94', time: '13:13', priority: 'Low', status: 'Not Started'}]);
  return (
    <div className='container'>
      <Menu setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className='main-container'>
        <TopBar activeTab={activeTab} />
        <div className='content-container'>
          {activeTab === 'Settings' && <Settings />}
          {activeTab === 'Home' && <Home name={name} setTasksList={setTasksList} tasksList={tasksList}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
