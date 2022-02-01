import { useState } from 'react'
import Menu from "./Menu";
import Home from './Home';
import Settings from './Settings';

function App() {
  const [activeTab, setActiveTab] = useState();
  return (
    <>
      <Menu setActiveTab={setActiveTab}/>
      {activeTab === 'settings' && <Settings />}
      {activeTab === 'home' && <Home />}
    </>
  );
}

export default App;
