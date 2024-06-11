import css from './App.module.css';
import Sidebar from './components/Sidebar';
import React from 'react';

function App() {
  return (
    <div className={css.App}>
        <Sidebar />
    </div>
  );
}

export default App;