import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Canvas from './Canvas';

function Scroll() {

   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
   const FadeUp = batch(Fade(), Move(), Sticky());

  return (
   <ScrollContainer>
      <ScrollPage page={1}>
         <section class="hero" id="home"> 
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
               <h1>
                  <span>Hi, I'm Vlad Nikitin!✋</span>
                  <span>Web developer 💻</span>
               </h1>
            </Animator>
         </section>
      </ScrollPage>

      <ScrollPage page={2}>
      <Animator animation={ZoomInScrollOut}>
         <h2>A little bit about myself 🧐</h2>
      </Animator>
      </ScrollPage>
      
      <ScrollPage>
      <Animator animation={FadeUp}>
         <section className="about" id="about">
            <div className="about__container">
               <div className="container__img">
               <img src="/img/profile-vlad.jpg" alt="cv" />
               </div>
               <div className="container__text">
               <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, non!</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde odio modi error ipsa esse sapiente ducimus ea! Minima, quod?</p>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non debitis sint sunt, ratione corrupti odio repudiandae et dignissimos dolorum, voluptatibus sit quasi accusamus laudantium facere illum explicabo architecto. Numquam, earum.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, repudiandae.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aspernatur minima. Eius fugit rerum totam, non quo et itaque necessitatibus eos nemo! Qui dicta earum aspernatur, odio amet sed nobis. Quasi enim, quibusdam possimus mollitia quos molestias natus illum, velit ad eum sequi unde! Ad iusto nisi odio quibusdam id.</p>
               </div>
            </div>
         </section>
      </Animator>
      </ScrollPage>
      <ScrollPage>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
         <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Dante Chun -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
         </span>
      </div>
      </ScrollPage>
      <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
         <span style={{ fontSize: "40px" }}>Done</span>
         <br/>
         <span style={{ fontSize: "30px" }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
         </span>
      </Animator>
      </ScrollPage>
   </ScrollContainer>
  )
}

export default Scroll