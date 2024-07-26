import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";

export default class App extends Component {

  pageSize = 15
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path = '/' element={<News key="" pageSize={this.pageSize + 5} category="" country="us"/>} ></Route>
            <Route exact path = '/about' element={<News key="general" pageSize={this.pageSize} category="general" country="in"/>} ></Route>
            <Route exact path = '/bussiness' element={<News key="bussiness" pageSize={this.pageSize} category="business" country="in"/>} ></Route>
            <Route exact path = '/entertainment' element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" country="in"/>} ></Route>
            <Route exact path = '/health' element={<News key="health" pageSize={this.pageSize} category="health" country="in"/>} ></Route>
            <Route exact path = '/general' element={<News key="general" pageSize={this.pageSize} category="general" country="in"/>} ></Route>
            <Route exact path = '/science' element={<News key="science" pageSize={this.pageSize} category="science" country="in"/>} ></Route>
            <Route exact path = '/sports' element={<News key="sports" pageSize={this.pageSize} category="sports" country="in"/>} ></Route>
            <Route exact path = '/technology' element={<News key="technology" pageSize={this.pageSize} category="technology" country="in"/>} ></Route>
          </Routes>
        </Router>

      </div>
    )
  }
}

// Adding infinite scroll 3:17