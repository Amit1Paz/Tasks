import './css/App.css'
import { useState } from 'react'
import Menu from "./Menu";
import Home from './Home';
import Settings from './Settings';

function App() {
  const [activeTab, setActiveTab] = useState();
  return (
    <div className='container'>
      <Menu setActiveTab={setActiveTab} activeTab={activeTab}/>
      {activeTab === 'Settings' && <Settings />}
      {activeTab === 'Home' && <Home />}
    </div>
  );
}

export default App;
