import React from 'react';
import Slider from "react-slick";

function Work() {
   const workItems = [
      {
         id: 1,
         heading: 'Sneakers store',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel.',
         link: '../sneakers/index.html',
         github: 'https://github.com/Naykitin/sneakers-store',
         image: ['/img/sneakers-store-1.png', '/img/sneakers-store-1.png']
      },
      {
         id: 2,
         heading: 'Sneakers store',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel.',
         link: '',
         github: 'https://github.com/Naykitin/sneakers-store',
         image: ['/img/sneakers-store-1.png']
      },
      {
         id: 3,
         heading: 'Sneakers store',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel.',
         link: '',
         github: 'https://github.com/Naykitin/sneakers-store',
         image: ['/img/sneakers-store-1.png']
      },
      {
         id: 4,
         heading: 'Sneakers store',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel.',
         link: '/todolist/index.html',
         github: 'https://github.com/Naykitin/to-do-list',
         image: ['/img/sneakers-store-1.png']
      }
   ];
   

   const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
   <div className='work__items'>
      {
         workItems.map((obj) => (
               <div className='work__item' key={obj.id}>
                  <div className="item__text">
                     <h3>{obj.heading}</h3>
                     <p>{obj.description}</p>
                     <div className="item__btns">
                        <a href={obj.link} target="_blank" rel="noreferrer">View site</a>
                        <a href={obj.github} target="_blank" rel="noreferrer">View GitHub</a>
                     </div>
                  </div>
                  <div className="item__img">
                     <Slider {...settings}>
                        {
                           obj.image.map((i) => {
                              return <img src={i} alt={obj.heading} />
                           })
                        }
                     </Slider>
                  </div>
               </div>
         ))
      }
    </div>
  )
}

export default Work