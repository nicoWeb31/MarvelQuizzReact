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

    const displayBtn = btn && (
        <Fragment>
                <div className="leftBox">
                    <button className ="btn-welcome"> Inscrition</button>
                </div>
                <div className="rightBox">
                    <button className ="btn-welcome">Connexion</button>
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
