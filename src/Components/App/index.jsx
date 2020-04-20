import React from 'react';

import '../../../src/App.css';
import Header from '../Header/index';
import Acceuil from '../Acceuil/index';
import Footer from '../Footer/index';
import Welcome from '../Welcome/index';
import Login from '../Login/index';
import SinUp from '../SinUp/index';
import ErrorPage from '../ErrorPage/index';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


function App() {
  return (

    //routage des composants
    <Router>  

      <Header/>

        <Switch>
          <Route exact path='/' component={Acceuil}/>>
          <Route path='/welcome' component={Welcome}/>
          <Route path='/login' component={Login}/>
          <Route path='/sinUp' component={SinUp}/>
          <Route component={ErrorPage}/>
        </Switch>
    

      <Footer/>

    </Router>
  );
}

export default App;
