import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import ProfilePage from './ProfilePage';
import {BrowserRouter, Route} from 'react-router-dom';

const App= () => {
    return (
        <div>
        <div class="ui inverted segment">
            <div class="ui inverted secondary menu">
                <a class="item">
                    Home
                </a>
                <a class="item">
                    Messages
                </a>
                <a class="item">
                    Friends
                </a>
            </div>
        </div>
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/profile" component={ProfilePage}/>
            </BrowserRouter>
        </div>

    );
};

export default App;
