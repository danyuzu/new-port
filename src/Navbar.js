import  React,{useState} from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';
const Navbar =() =>
{

   
   const [click, setclick] = useState(false);
   const handleclick=() => setclick(!click);

 return(<>

    <nav className="Navbar">
    <p className="tag">JDCC</p>
        <div className="nav-toggle" onClick={handleclick}>
         <i className={click ?'fas fa-times' : 'fas fa-bars'}/>
         </div>
         <ul className={click ? `navlinks active` : `navlinks`}>
            
            <li className="listitem"> <a href="#headerfr">Home</a></li>
            <li className="listitem"> <a href="#about">about</a></li>
            <li className="listitem"> <a href="#projects">projects</a></li>
            <li className="listitem"><a href="/Resume_Template2.0.pdf" target="_blank">Resume</a></li>
            <li className="listitem"> <a href="#contact">contact</a></li>
          
            
         </ul>
        
         
       
    </nav>
 </>);
}
export default Navbar;