import './App.css';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="App"  >

      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Certificates></Certificates>
      <Contact></Contact>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
