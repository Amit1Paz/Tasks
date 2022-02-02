import './css/App.css';
import { useState } from 'react';
import Menu from "./Menu";
import Home from './Home';
import Settings from './Settings';
import TopBar from './TopBar';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <div className='container'>
      <Menu setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className='main-container'>
        <TopBar activeTab={activeTab} />
        {activeTab === 'Settings' && <Settings />}
        {activeTab === 'Home' && <Home />}
      </div>
    </div>
  );
}

export default App;
