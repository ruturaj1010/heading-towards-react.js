import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App () {
  const [mode, setMode] = useState( "light" );
  const [alert, setAlert] = useState( null );

  const showAlert = ( message, type ) => {
    setAlert( {
      msg: message,
      type: type
    } )
    setTimeout(() => {
      setAlert(null);
    }, 2000);
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
      <Navbar title="TextUtils" aboutText="About us" mode={ mode } toggleMode={ toggleMode } />
      {/* <Navbar/> */ }

      <Alert alert={ alert } />

      <div className="container">
        <TextForm heading="Any suggestion" showAlert={showAlert} mode={ mode } />
      </div>

      <About/>


      {/* <Router>
        <Navbar mode={ mode } toggleMode={ toggleMode } />
        <Alert alert={ alert } />

        <Switch>
        // Use Route to define the paths and components for each page
          <Route exact path="/" component={ <TextForm heading="Any suggestion" showAlert={ showAlert } mode={ mode } /> } />
          <Route path="/about" component={ About } />
        </Switch>
      </Router> */}

    </>
  );
}

export default App;