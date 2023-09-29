import React from 'react';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import { Home } from './Components/Pages/Home';
import {Space} from 'antd'
import { PageContent } from './Components/Pages/PageContent';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <PageContent/>
    </div>
  );
}

export default App;
