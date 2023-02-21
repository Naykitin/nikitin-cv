import React from 'react';
import {initLightboxJS} from 'lightbox.js-react';
import {SlideshowLightbox} from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

function Work() {
   React.useEffect(() => {
      initLightboxJS("1C60-41E9-9D71-DEA2", "individual");
    }, []);
   const workItems = [
      {
         id: 1,
         heading: 'React Mini Projects',
         description: 'When I started learning React, I was trying to create basic apps that can display common React features. Then I decided to put it all together and learn how React Router works.',
         link: 'http://m997648r.beget.tech/',
         github: 'https://github.com/Naykitin/react-mini-projects',
         image: ['/img/react-mini-projects/5.png', '/img/react-mini-projects/4.png', '/img/react-mini-projects/3.png', '/img/react-mini-projects/2.png', '/img/react-mini-projects/1.png']
      },
      {
         id: 2,
         heading: 'Sneakers store',
         description: 'After creating small apps, I moved on to a more complex task - a sneakers store.',
         link: 'https://nikitinsproject.000webhostapp.com/',
         github: 'https://github.com/Naykitin/sneakers-store',
         image: ['/img/sneakers-store/1.png', '/img/sneakers-store/2.png', '/img/sneakers-store/3.png', '/img/sneakers-store/4.png']
      },
      {
         id: 3,
         heading: 'Remote-helpers',
         description: 'The Wordpress project where I created the CV page. This project is based on a fully custom template with advance custom fields for each element that needs to be modified. Because of this, content managers can easily add new content to pages. I also made a custom canvas animation on the slider block.',
         link: false,
         github: false,
         image: ['/img/remote-helpers/1.png', '/img/remote-helpers/2.png', '/img/remote-helpers/3.png']
      },
      {
         id: 4,
         heading: 'Tictactoe',
         description: 'My first React app🫣',
         link: false,
         github: 'https://github.com/Naykitin/tic-tac-toe',
         image: ['/img/tictactoe.png']
      }
   ];
  return (
   <div className='work__items'>
      {
         workItems.map((obj) => (
               <div className='work__item' key={obj.id}>
                  <div className="item__text">
                     <h3>{obj.heading}</h3>
                     <p>{obj.description}</p>
                     <div className="item__btns">
                     {(obj.link === false ? <></> :  <a href={obj.link} target="_blank" rel="noreferrer">View site</a>)}
                     {(obj.github === false ? <></> :  <a href={obj.github} target="_blank" rel="noreferrer">View GitHub</a>)}
                     </div>
                  </div>
                  <div className="item__img">
                     <SlideshowLightbox showControls={true} showThumbnails={true} className='lightbox'>
                        {
                           obj.image.map((i, index) => {
                              return <img src={i} alt={obj.heading} key={index}/>
                           })
                        }
                     </SlideshowLightbox>
                  </div>
               </div>
         ))
      }
    </div>
  )
}

export default Work