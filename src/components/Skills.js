import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';

function Skills() {
   const skillItems = [
      {
         id: 1,
         icon: faCoffee,
         text: 'Coffee'
      },
      {
         id: 2,
         icon: faHome,
         text: 'Home'
      }
   ]
  return (
   <section className="skills" id="skills">
      <div className="wrapper">
         <h2>Skills & Tools</h2>
         <div className="skills__list">
            {
               skillItems.map((obj) => (
                  <div className="skills__item">
                     <FontAwesomeIcon icon={obj.icon} />
                     <h3>{obj.text}</h3>
                  </div>
               ))
            }
         </div>
      </div>
   </section>
  )
}

export default Skills