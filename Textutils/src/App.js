import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";

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
    }, 1500 );
  }

  const toggleMode = () => {
    if ( mode === 'light' ) {
      setMode( 'dark' )
      document.body.style.backgroundColor = "rgb(70 58 58)";
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
      <Router>
          <Navbar title="TextUtils" aboutText="About us" mode={ mode } toggleMode={ toggleMode } />
          <Alert alert={ alert } />

          <Routes>  {/* Routes is used instead of Switch beacause of updated version React */ }
            <Route exact path="/" element={ <TextForm heading="Any suggestion" showAlert={ showAlert } mode={ mode } /> } />
            <Route exact path="/about" element={ <About mode={ mode }/> } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Router>

    </>
  );
}

export default App;