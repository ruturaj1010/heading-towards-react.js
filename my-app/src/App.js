import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';

function App () {
  const [mode, setMode] = useState( "light" );
  const toggleMode = () => {
    if ( mode === 'light' ) {
      setMode( 'dark' )
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
    } else {
      setMode( 'light' )
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={ mode } toggleMode={ toggleMode } />
      {/* <Navbar/> */ }

      <div className="container">
        <TextForm heading="Any suggestion" mode={ mode }/>
      </div>

      {/* <About/> */ }

    </>
  );
}

export default App;