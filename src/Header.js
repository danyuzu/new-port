
import React from 'react';
import foto from './foto.png'
import htmllogo from './imgs/htmllogo.jpg'
 

const Header = ()=>
{


    return ( 
    <header className="header">
    <div className="hola"> 
    <a id="headerfr"></a>
        <h1 className="title">Front-End React Developer</h1>
        <h2 className="hello"> Hi! I'm Daniel Cervantes. A passionate Front-end React Developer based in Mexico. 📍 </h2>

        </div>
        
       
        <img  className="mano" alt="program-img" src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png"/>



        <div className="socialicons"> 
        <a  target="_blank" href='https://www.linkedin.com/in/daniel-cervantes-2b2823185/'>   <i className="fab fa-linkedin"></i></a>
        <a  target="_blank"  href='https://github.com/danyuzu'>   <i className="fab fa-github"></i></a>
        </div>
       
       
        <img  alt="image" className="foto"  src={foto}/>
   
        


        <div className="stack">
            Tech Stack| 

            <ul>
                <li className="skills">

                <i className="fab fa-html5 "></i>

                </li>
                <li className="skills">

                <i className="fab fa-css3-alt "></i>
                </li>
                <li className="skills">

                <i className="fab fa-js-square"></i>
                </li>
                <li className="skills">

                <i className="fab fa-react "></i>
                </li>
                <li className="skills">
                <img  alt="image" className="imgskill"  src="https://stefantopalovicdev.vercel.app/static/media/tailwind.79614a5f61617ba49a0891494521226b.svg"/>
                  
                </li>
            </ul>
        </div>
       



         
        </header>)
}
export default Header;