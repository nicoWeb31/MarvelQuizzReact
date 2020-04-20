import React,{useRef,useEffect,useState,Fragment} from 'react'

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
                <div className="leftBox">
                    <button onMouseOver={setLeftImg} onMouseOut={clearImage} className ="btn-welcome"> Inscrition</button>
                </div>
                <div className="rightBox">
                    <button onMouseOver={setRigthImg} onMouseOut={clearImage}  className ="btn-welcome">Connexion</button>
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
