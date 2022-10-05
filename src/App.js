import Canvas from "./components/Canvas";
function App() {
  return (
    <div className="App">
      <header className="app__header">
        <nav className="app__nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero" id="home">
        <div className="wrapper">
          <div className="hero__text">
            <h1>
              <span>Hi, I'm Vlad Nikitin!</span>
              <span>Web developer</span>
            </h1>
          </div>
        </div>
        <Canvas/>
      </section>
      <section className="about" id="about">
        <div className="wrapper">
          <h2>About</h2>
          <div className="about__container">
            <div className="container__img">
              <img src="/img/profile-vlad.jpg" alt="Vlad Nikitin photo" />
            </div>
            <div className="container__text">
              <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, non!</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde odio modi error ipsa esse sapiente ducimus ea! Minima, quod?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non debitis sint sunt, ratione corrupti odio repudiandae et dignissimos dolorum, voluptatibus sit quasi accusamus laudantium facere illum explicabo architecto. Numquam, earum.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, repudiandae.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aspernatur minima. Eius fugit rerum totam, non quo et itaque necessitatibus eos nemo! Qui dicta earum aspernatur, odio amet sed nobis. Quasi enim, quibusdam possimus mollitia quos molestias natus illum, velit ad eum sequi unde! Ad iusto nisi odio quibusdam id.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="wrapper">
          <h2>Skills & Tools</h2>
          <div className="skills__list">
            <div className="skills__item">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
