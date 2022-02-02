import './css/App.css';
import { useState } from 'react';
import Menu from "./Menu";
import Home from './Home/Home';
import Settings from './Settings';
import TopBar from './TopBar';

function App() {
  const [name, setName] = useState('Amit')
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <div className='container'>
      <Menu setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className='main-container'>
        <TopBar activeTab={activeTab} />
        <div className='content-container'>
          {activeTab === 'Settings' && <Settings />}
          {activeTab === 'Home' && <Home name={name} />}
        </div>
      </div>
    </div>
  );
}

export default App;
