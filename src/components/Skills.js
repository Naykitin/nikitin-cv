import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faGithub, faSass, faPhp, faWordpress } from '@fortawesome/free-brands-svg-icons';

function Skills() {
   const skillItems = [
      {
         id: 1,
         icon: faHtml5,
         text: 'HTML'
      },
      {
         id: 2,
         icon: faCss3,
         text: 'CSS'
      },
      {
         id: 3,
         icon: faJs,
         text: 'JavaScript'
      },
      {
         id: 4,
         icon: faReact,
         text: 'React'
      },
      {
         id: 5,
         icon: faGithub,
         text: 'Github'
      },
      {
         id: 6,
         icon: faReact,
         text: 'React'
      },
      {
         id: 7,
         icon: faSass,
         text: 'Sass'
      },
      {
         id: 8,
         icon: faPhp,
         text: 'PHP'
      },
      {
         id: 9,
         icon: faWordpress,
         text: 'Wordpress'
      },
      {
         id: 10,
         icon: faCode,
         text: 'VsCode'
      }
   ]
  return (
   <div className="skills__list">
      {
         skillItems.map((obj) => (
            <div className="skills__item" key={obj.id}>
               <FontAwesomeIcon icon={obj.icon} size="4x"/>
               <h3>{obj.text}</h3>
            </div>
         ))
      }
   </div>
  )
}

export default Skills