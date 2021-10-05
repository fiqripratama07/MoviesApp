import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import CombineReducers from "../Modules/CombineReducers";
import ListMovies from "../Modules/List/ListMovies";
import Detail from "../Modules/Detail/Detail";

class Content extends React.Component {

    render() {
        return (
            <Provider store={createStore(CombineReducers)}>
                <Router>
                    <Switch>
                        <Route exact path={"/"} component={ListMovies}></Route>
                        <Route path={"/detail"} component={Detail}></Route>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Content;
