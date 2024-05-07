import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';

function App () {
  const [mode, setMode] = useState( "light" );
  const [alert, setAlert] = useState( null );

  const showAlert = ( message, type ) => {
    setAlert( {
      msg: message,
      type: type
    } )
  }
  const toggleMode = () => {
    if ( mode === 'light' ) {
      setMode( 'dark' )
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert( "Dark Mode has been enabled", "success" );
    } else {
      setMode( 'light' )
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert( "Light Mode has been enabled", "success" );
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={ mode } toggleMode={ toggleMode } />
      {/* <Navbar/> */ }

      <Alert alert={ alert } />

      <div className="container">
        <TextForm heading="Any suggestion" mode={ mode } />
      </div>

      {/* <About/> */ }

    </>
  );
}

export default App;