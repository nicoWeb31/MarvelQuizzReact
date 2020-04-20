import React from 'react';
import '../../../src/App.css';
import Header from '../Header/index';
import Acceuil from '../Acceuil/index';
import Footer from '../Footer/index';
import Welcome from '../Welcome/index';
import Login from '../Login/index';
import SinUp from '../SinUp/index';
import ErrorPage from '../ErrorPage/index'


function App() {
  return (
    <div>
      <Header/>

      <Welcome/>
      <Acceuil />
      <Login />
      <SinUp/>
      <ErrorPage/>

      <Footer/>
    </div>
  );
}

export default App;
