import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import ProfilePage from './ProfilePage2';
import Register from './Register';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/profile" component={ProfilePage}/>
             <Route path="/register" component={Register}/>
            </BrowserRouter>
        </div>)
};

export default App;
