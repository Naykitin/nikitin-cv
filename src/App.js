import ContactForm from "./components/ContactForm";
import Work from "./components/Work";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <Navbar />
      </header>
      <Scroll />

    <section className="work" id="work">
      <div className="wrapper">
        <h2>Work</h2>
        <p className="work__description">A selection of works that I create in my spare time</p>
        <Work />
      </div>
    </section>
    
    <section className="contact" id="contact">
      <div className="wrapper">
        <h2>Contact</h2>
        <p className="contact__description">Fill free to send me email to say "Hi" or ask for my resume in the form below. I look forward to hearing from you!</p>
        <div className="contact__wrapper">
          <ContactForm />
          <div className="contact__social">
            <p>Also, you can find me here!</p>
            <div className="social__links">
              <a href="https://t.me/naykitin" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTelegram} size="2x"/></a>
              <a href="https://www.linkedin.com/in/nikitin-vladyslav/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  );
}

export default App;
