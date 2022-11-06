import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Canvas from './Canvas';
import Skills from './Skills';

function Scroll() {

   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
   const FadeUp = batch(Fade(), Move(), Sticky());

  return (
   <ScrollContainer>

      <ScrollPage>
         <section className="hero" id="home"> 
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -300))}>
               <h1>
                  <span>Hi, I'm Vlad Nikitin!✋</span>
                  <span>Web developer 💻</span>
               </h1>
            </Animator>
            <Canvas/>
         </section>
      </ScrollPage>

      <ScrollPage>
         <section className='about__title'>
            <Animator animation={ZoomInScrollOut}>
               <h3>A little bit about myself 🧐</h3>
            </Animator>
         </section>
      </ScrollPage>
      
      <ScrollPage>
         <div id="about"></div>
         <section className="about">
            <Animator animation={FadeUp}>
                  <div className="about__container">
                     <div className="container__img">
                     <Animator animation={batch(MoveIn(0, -800), MoveOut(0, 800))}>
                        <img src="/img/profile-vlad.jpg" alt="cv" />
                     </Animator>
                     </div>
                     <div className="container__text">

                        <Animator animation={MoveOut(1000, 0)}> 
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, repudiandae.</p>
                        </Animator>

                        <Animator animation={MoveOut(-1000, 0)}>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aspernatur minima. Eius fugit rerum totam, non quo et itaque necessitatibus eos nemo!</p>
                        </Animator>

                        <Animator animation={MoveIn(-1000, 0)}>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde odio modi error ipsa esse sapiente ducimus ea! Minima, quod?</p>
                        </Animator>

                        <Animator animation={MoveIn(1000, 0)}>
                           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non debitis sint sunt, ratione corrupti odio repudiandae et dignissimos dolorum.</p>
                        </Animator>

                     </div>
                  </div>
            </Animator>
         </section>
      </ScrollPage>

      <ScrollPage>
         <section className="skills" id="skills">
            <Animator animation={batch(Fade(), MoveIn(0, 1000), MoveOut(0, -500), Sticky())}>
               <h2>Skills & Tools</h2>
               <Skills />
            </Animator>
         </section>
      </ScrollPage>
   </ScrollContainer>
  )
}

export default Scroll