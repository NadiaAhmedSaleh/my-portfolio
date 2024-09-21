import './App.css';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
