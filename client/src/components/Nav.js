import React, { useState } from 'react';

import useDarkMode from '../hooks/useDarkMode.js';

function Nav(){
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return(
        <div>
            <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >Toggle Dark Mode</button>
        </div>
    )
}

export default Nav;