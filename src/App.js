import React, {Component, Fragment} from 'react';
import './App.css';
import Nav from "./components/Nav";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import Question from "./components/Question";
import {handleInitialData} from "./utils/api";
import {connect} from "react-redux";
import Login from "./components/Login";

class  App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <div className="App">
                <Fragment>

                {this.props.loggedInUser ? (
                    <div>
                    <Nav/>
                    <Route path='/home' exact component={Home} />
                    <Route path='/add' exact component={NewQuestion} />
                    <Route path='/leaderboard' exact component={LeaderBoard} />
                        <Route path='/questions/:id' exact component={Question} /></div>
               ) : (
                       <Login/>
                    )}
                </Fragment>
            </div>
        );
    }
}

function mapStateToProps({loggedInUser}) {


    return {
        loggedInUser
    }

}


export default connect(mapStateToProps)(App);
