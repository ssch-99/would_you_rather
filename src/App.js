import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav";
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import NewQuestion from "./components/NewQuestion";

class  App extends Component {


    render() {
        return (
            <div className="App">
                <Nav/>
                <BrowserRouter>
                    <Route path='/' exact component={Home} />
                    <Route path='/add' exact component={NewQuestion} />
                    <Route path='/leaderboard' exact component={NewQuestion} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
