import React from 'react';
import wallpaper from './pantallas.jpg'

const About =() =>
{

    return( <div className="about">
      <a id="about"></a>

    <div className="contentcont">
    <div className="content">
    

    <h1 >ABOUT ME</h1>

<h2>A dedicated Front-end Developer based in Mexico 📍</h2>
<h3>As a junior Front-End Developer, I possess an impresive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.
I excel on designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic,
 engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am 
 also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</h3>
    </div>
    </div>
    

    <img   alt="img" className="aboutimg"  src={wallpaper}/>
  
    </div>);
   
}

export default About;