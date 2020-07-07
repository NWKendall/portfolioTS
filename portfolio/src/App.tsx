import React from 'react';
import GitCalendar from '../src/components/gitcalendar/gitcalendar';
import NavBar from '../src/components/navbar/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <GitCalendar />
    </div>
  );
}

export default App;
