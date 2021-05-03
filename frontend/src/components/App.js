import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import ProfilePage from './ProfilePage2';
import Register from './Register';
import history from './history/History'
import CreateLogin from './CreateLogin';
import {
    Route,
    Router
} from 'react-router-dom';

const App = () => {
    return (
            <Router history={history}>
                <div>
                    <Route path="/" exact component={Login}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/profile" component={ProfilePage}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/createLogin" component={CreateLogin}/>
                </div>
            </Router> )
};

export default App;
