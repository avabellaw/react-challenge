import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm'
import React from 'react';

function App() {
  return (
    <div className={css.App}>
        {
            // Challenge 1
            /*<Sidebar /> */

            // Challenge 2 
            /* <NavBarSimple name="Ava" /> */

            // Challenge 3
            <NavBarForm />
        }       
    </div>
  );
}

export default App;