import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import React from 'react';

function App() {
  return (
    <div className={css.App}>
        {
            /* Challenge 1 */
            //<Sidebar />

            /* Challenge 2 */
            <NavBarSimple name="Ava" />
        }       
    </div>
  );
}

export default App;