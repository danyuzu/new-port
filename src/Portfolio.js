
import React,{useState} from 'react';

import longscreen from './localhost_3004_.png'
import port from './danielcervantescorona.com_.png'
import './Portfolio.scss'

const Portfolio = ()=>{

     const [project, setproject] =useState([
        {protitle:"Ecommerce", prodesc:`With a focus on simplicity 
        and clean design, this store prioritize user experience,
         making it easy for customers to find and purchase the products they need.`, 
         skillone:"CSS",skilltwo:"React", gitrepo:"https://github.com/danyuzu/portfolio", 
         livedemo:"https://danielcervantescorona.com/projectos/ecommerce/perro/index.html" }
   
     ])
     const [projecttwo, setprojecttwo] =useState([
    {protitle:"Last Portfolio", prodesc:"Some basic projects I've done", skillone:"CSS",skilltwo:"React", 
    gitrepo:"https://github.com/danyuzu/improvedecommerce",
     livedemo:"https://danielcervantescorona.com/projectos/lastport/index.html"}
  

   ])
    return(
        <div className="portfolio">
          <a id="projects"></a>
         <h1 >PORTFOLIO</h1>
         <p className="ptag">Each project is a datailed piece of work 🧩</p>


       
            {   project.map((p) => 

               <div className="projects-grid">
        <div className="pro pro__1 undefined">
        <div className="pro__img">

       <a target="_blank" href="https://danielcervantescorona.com/" rel="noreferrer" >
       
       <img alt="image" className="previmg"   src={longscreen} />
       </a>
      
    </div>
            <div className="description">
            <div className="minidesc">
            <h1 className="protitle">{p.title}</h1>
                <p className="desc">{p.prodesc}</p>
            </div>
              
                <div className="projectskills">
                  <p className="skillone">{p.skillone}</p>  <p className="skilltwo">{p.skilltwo}</p>
                </div>
                    
                    <div className="enlaces">
                    <a  target="_blank"  className="codegit" href={p.gitrepo}>Code  <i className="fab fa-github"></i>
                        
                    </a>
                    <a target="_blank" className="livedemo" href={p.livedemo}>Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
            </div>

        </div>
            
            </div>
                 )}



                 {   projecttwo.map((p) => 

<div className="projects-grid">
<div className="pro pro__1 undefined">
<div className="pro__img">

<a target="_blank" href="https://danielcervantescorona.com/" rel="noreferrer" >

<img alt="image" className="previmgdos"   src={port} />
</a>

</div>
<div className="description">
<div className="minidesc">
<h1 className="protitle">{p.title}</h1>
 <p className="desc">{p.prodesc}</p>
</div>

 <div className="projectskills">
   <p className="skillone">{p.skillone}</p>  <p className="skilltwo">{p.skilltwo}</p>
 </div>
     
     <div className="enlaces">
     <a  target="_blank"  className="codegit" href={p.gitrepo}>Code  <i className="fab fa-github"></i>
         
     </a>
     <a target="_blank" className="livedemo" href={p.livedemo}>Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
     </div>
</div>

</div>

</div>
  )}






      

        </div>
    )

}
export default Portfolio;