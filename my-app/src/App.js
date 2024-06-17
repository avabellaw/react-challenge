import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
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
            /* <NavBarForm /> */

            // Challenge 4 & 5
            <Content />
        }       
    </div>
  );
}

export default App;