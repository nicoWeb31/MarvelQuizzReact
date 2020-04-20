import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../firebase';

const SingUp = () => {


    const firebase = useContext(FirebaseContext);
    console.log(firebase)

    const data ={

        pseudo : '',
        email :'',
        password : '',
        confirmPassword : ''


    }
    
    const [loginData, setLoginData] = useState(data);


    const [error , setError] = useState('');

    const {pseudo,email,password,confirmPassword} = loginData;

            // condition pour ad=ffcher le boutons
        const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword ? <button disabled>Inscriptions</button> : <button>Inscriptions</button>    



    const handleChange =(e)=>{
        setLoginData({...loginData,[e.target.id] : e.target.value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {email,password} = loginData;
        firebase.singUpUser(email,password)
        .then(user=>{
            setLoginData({...data});
        })
        .catch(error => {
            setError(error);
            setLoginData({...data})

        })
    }


    //gestion des errors
    const errorMess = error !== '' && <span className = '' >{error.message}</span>;

    return (
        <div className = "singUpLoginBox">
            <div className="slContainer">
                {/* div de gauche  */}
                    <div className="formBoxLeftSignup">

                    </div>
                {/* div de droite */}
                    <div className="formBoxRight">
                        <div className="formContent">
                            {errorMess}
                                <h2>Inscription</h2>
                            <form onSubmit = {handleSubmit}>
                                <div className="inputBox">
                                    <input onChange={handleChange} value ={pseudo} type="text" id="pseudo" required autoComplete = "off" />
                                    <label htmlFor="pseudo">Pseudo</label>
                                </div>
                                <div className="inputBox">
                                    <input onChange={handleChange} value ={email} type="email" id="email" required autoComplete = "off" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="inputBox">
                                    <input onChange={handleChange} value ={password} type="password" id="password" required autoComplete = "off" />
                                    <label htmlFor="password">Mot de passe</label>
                                </div>
                                <div className="inputBox">
                                    <input  onChange={handleChange} value ={confirmPassword} type="password" id="confirmPassword" required autoComplete = "off" />
                                    <label htmlFor="confirmPassword">Confirmer Mot de passe</label>
                                </div>
                                {btn}
                            </form>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default SingUp
