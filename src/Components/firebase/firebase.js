import app from 'firebase/app';
import 'firebase/auth';



// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDXgYhxvvMHJ_uWkYmTB6DkJk26xAswWcU",
    authDomain: "quizz-marvel.firebaseapp.com",
    databaseURL: "https://quizz-marvel.firebaseio.com",
    projectId: "quizz-marvel",
    storageBucket: "quizz-marvel.appspot.com",
    messagingSenderId: "822818941828",
    appId: "1:822818941828:web:d3cc3df0a2f3303ee48bd1"
};




class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }
    //inscription
    
    singUpUser = (email, password) => 
            this.auth.createUserWithEmailAndPassword(email, password);
    

    //connexion
    login = (emai,password) => 
        this.auth.signInWithEmailAndPassword(emai,password);

    

    //deconexion
    signOutUser = () =>
        this.auth.signOut();
    
}



export default Firebase;