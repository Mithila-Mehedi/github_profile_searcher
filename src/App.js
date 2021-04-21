import React from 'react';
import './App.css';
import Display from './components/display';
import Profile from './components/profile'
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {
  return (
    <div className="App">
      <div className='top'>
      <GitHubIcon/>
      <h3>GitHub Profile Searcher</h3>
      </div>  
      <Profile/>
      
    </div>
  );
}

export default App;
