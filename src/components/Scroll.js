import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Canvas from './Canvas';
import Skills from './Skills';

function Scroll() {

   const [windowSize, setWindowSize] = React.useState(getWindowSize());
   React.useEffect(() => {
      function handleWindowResize() {
         setWindowSize(getWindowSize());
      }
      window.addEventListener('resize', handleWindowResize);
      return () => {
         window.removeEventListener('resize', handleWindowResize);
      };
   }, []);
   
   function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }

   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
   const FadeUp = batch(Fade(), Move(), Sticky());
   const workExperience = [
      {
         name: 'Aweb Systems',
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
         name: 'Kharkiv National University Of Radio Electronics',
         department: 'Automation and computer-integrated technologies',
         years: 'September 2018 — December 2022',
         degree: 'Master of Science'
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
                     {windowSize.innerWidth <= 768 ? <></> :
                        <div className="container__img">
                           <Animator animation={batch(MoveIn(0, -800), MoveOut(0, 800))}>
                              <img src="/img/profile-vlad.jpeg" alt="cv" />
                           </Animator>
                        </div>
                     }
                     <div className="container__text">
                        <Animator animation={windowSize.innerWidth <= 768 ? batch(MoveIn(0, 100), MoveOut(800, 0)) : MoveOut(1000, 0)}> 
                           <p>Hello! My name is Vlad, I'm a developer from Ukraine, looking for a full-time remote job.</p>
                        </Animator>

                        <Animator animation={windowSize.innerWidth <= 768 ? batch(MoveIn(0, 100), MoveOut(-3000, 0), FadeOut) : MoveOut(-1000, 0)}>
                           <h3>Work experience</h3>
                           {
                              workExperience.map((work, index) => (
                                 <ul className='workList' key={index}>
                                    <li className='name'><span>{work.name}</span> ({work.position})</li>
                                    <li className='experience'>{work.experience}</li>
                                    <li className='tasks'>{work.tasks}</li>
                                 </ul>
                              ))
                           }
                        </Animator>

                        <Animator animation={windowSize.innerWidth <= 768 ? batch(MoveIn(-1000, 0), MoveOut(0, -800)) : MoveIn(-1000, 0)}>
                           <h3>Education</h3>
                           {
                              education.map((i, index) => (
                                 <ul className='educationList' key={index}>
                                    <li className='name'><span>{i.name}</span> ({i.department})</li>
                                    <li className='info'>{i.years} | {i.degree}</li>
                                 </ul>
                              ))
                           }
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