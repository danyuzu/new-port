
import React from 'react';
import './Protemplate.scss'
import longscreen from './localhost_3004_.png'
const Projecttemplate =(props) =>
{

    return(
       
   
    <div className="projects-grid">
        <div className="pro pro__1 undefined">
        <div className="pro__img">

       <a target="_blank" href="https://danielcervantescorona.com/" rel="noreferrer" >
       </a>
       <img alt="image" className="previmg"   src={props.preview} />
       
      
    </div>
            <div className="description">
            <div className="minidesc">
            <h1 className="protitle">{props.title}</h1>
                <p className="desc">{props.desc}</p>
            </div>
              
                <div className="projectskills">
                  <p className="skillone">{props.skillone}</p>  <p className="skilltwo">{props.skilltwo}</p>
                </div>
                    
                    <div className="enlaces">
                    <a  target="_blank"  className="codegit" href={props.repo}>Code  <i className="fab fa-github"></i>
                        
                    </a>
                    <a target="_blank" className="livedemo" href={props.demo}>Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
            </div>

        </div>
            
            </div>
      
    );
}

export default Projecttemplate;