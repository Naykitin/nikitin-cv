import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Canvas from './Canvas';
import Skills from './Skills';

function Scroll() {

   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
   const FadeUp = batch(Fade(), Move(), Sticky());
   const workExperience = [
      {
         name: 'Aweb Systens',
         position: 'HTML Coder',
         experience: 'February 2021 — March 2022',
         tasks: 'Layout of pages, creation of adaptive, accordions and burger menus, connection and configuration of sliders, SEO optimization.'
      },
      {
         name: 'Remote Helpers',
         position: 'Front-end developer',
         experience: 'April 2022 — present',
         tasks: 'Optimizing the user experience, using HTML, JavaScript and CSS to bring concepts to life, developing and maintaining the user interface.'
      }
   ];
   const education = [
      {
         name: 'Kharkiv National University Of Radio Electronics Automation and Computer-Integrated Technologies',
         department: 'Automation and computer-integrated technologies',
         years: 'September 2018 — December 2022',
         degree: 'Master'
      }
   ]

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
                           <img src="/img/profile-vlad.jpeg" alt="cv" />
                        </Animator>
                     </div>
                     <div className="container__text">

                        <Animator animation={MoveOut(1000, 0)}> 
                           <p>Hello! My name is Vlad, I'm a developer from Ukraine, looking for a full-time remote job.</p>
                        </Animator>

                        <Animator animation={MoveOut(-1000, 0)}>
                           <h3>Work experience</h3>
                           {
                              workExperience.map((work) => (
                                 <ul className='workList'>
                                    <li className='name'><span>{work.name}</span> ({work.position})</li>
                                    <li className='experience'>{work.experience}</li>
                                    <li className='tasks'>{work.tasks}</li>
                                 </ul>
                              ))
                           }
                        </Animator>

                        <Animator animation={MoveIn(-1000, 0)}>
                           <h3>Education</h3>
                           {
                              education.map((i) => (
                                 <ul className='educationList'>
                                    <li className='name'><span>{i.name}</span> ({i.department})</li>
                                    <li className='info'>{i.years} | {i.degree}</li>
                                 </ul>
                              ))
                           }
                        </Animator>

                        {/* <Animator animation={MoveIn(1000, 0)}>
                           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non debitis sint sunt, ratione corrupti odio repudiandae et dignissimos dolorum.</p>
                        </Animator> */}

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