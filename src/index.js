import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/index';
import * as serviceWorker from './serviceWorker';
import Firbase,{FirebaseContext} from './Components/firebase/index'



ReactDOM.render(
  <React.StrictMode>
    {/* on encapasule notre app avec le context de fireBase et on instancie en value , elle pourra etre consommer partout dans l'app via le consumer*/}
    <FirebaseContext.Provider value = {new Firbase()}>   
      <App />
    </FirebaseContext.Provider>



  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
