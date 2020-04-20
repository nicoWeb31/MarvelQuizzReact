import React,{useRef,useEffect,useState,Fragment} from 'react';
import { Link } from 'react-router-dom';

const Accueil = () => {
    
    
    const [btn,setBtn] = useState(false);

    const refWolverine = useRef(null);
    useEffect(()=>{
        refWolverine.current.classList.add("startingImg");
        setTimeout(()=>{
        refWolverine.current.classList.remove("startingImg");
        setBtn(true);
        },2000)
    },[])


    const setLeftImg =()=>{
        refWolverine.current.classList.add("leftImg");
    }

    const setRigthImg = () =>{
        refWolverine.current.classList.add("rightImg");
    }

    const clearImage = () => {
        if(refWolverine.current.classList.contains("leftImg")){//si contient la class "leftImg" 
        refWolverine.current.classList.remove("rightImg");
        }else if(refWolverine.current.classList.contains("rightImg"))
        {
            refWolverine.current.classList.remove("leftImg");
        }
    }

    const displayBtn = btn && (
        <Fragment>
                <div className="leftBox" onMouseOver={setLeftImg} onMouseOut={clearImage}>
                    <Link className ="btn-welcome" to="/sinUp"> Inscrition</Link>
                </div>
                <div className="rightBox" onMouseOver={setRigthImg} onMouseOut={clearImage}>
                    <Link className ="btn-welcome" to="/login">Connexion</Link>
                </div>
        </Fragment>
    )


    return (
        
            <main ref = {refWolverine} className ="welcomePage">
                {displayBtn}
            </main>
        
    )
}

export default Accueil
