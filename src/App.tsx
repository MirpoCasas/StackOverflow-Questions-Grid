import React from 'react';
import DoneGrid from './components/DoneGrid';
import './App.css';

function App() {
  return (
    <header>
      <div>
        <h1>Hi Kishan! I hope this is what you were expecting!</h1>
        <p className='Desc'>I learned to use the library with YouTube tutorials and had to polish my API knowledge but managed to make it work! Sorry for the delay, I was finishing learnging TypeScript for this.</p>
      </div>
      <div className="GridCont">
        <DoneGrid/>
      </div>
    </header>
  );
}

export default App;
