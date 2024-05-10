import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App () {
  const [mode, setMode] = useState( "light" );
  const [alert, setAlert] = useState( null );

  const showAlert = ( message, type ) => {
    setAlert( {
      msg: message,
      type: type
    } )
    setTimeout( () => {
      setAlert( null );
    }, 2000 );
  }

  const toggleMode = () => {
    if ( mode === 'light' ) {
      setMode( 'dark' )
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert( "Dark Mode has been enabled", "success" );
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode( 'light' )
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert( "Light Mode has been enabled", "success" );
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About us" mode={ mode } toggleMode={ toggleMode }  /> */ }
      {/* <Navbar/> */ }

      {/* <Router> */}
        <div className="container my-3">
          <Navbar title="TextUtils" aboutText="About us" mode={ mode } toggleMode={ toggleMode } />
          <Alert alert={ alert } />

          {/* <Routes>    {/* Routes is used instead of Switch beacause of updated version React */ } */}
            <Route exact path="/" element={ <TextForm heading="Any suggestion" showAlert={ showAlert } mode={ mode } /> } />
            <Route exact path="/about" element={ <About /> } />
          {/* </Routes> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;