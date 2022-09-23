// import logo from './logo.svg';
import './App.css';
import { NavSys } from './components/NavSys';
import { Intro } from './components/Intro';
import { Skills } from './components/Skills';
import { PersonalProjects } from './components/PersonalProjects';
import { HireMe } from "./components/HireMe";
import { SuggestionBox } from "./components/SuggestionBox";
import { Footer } from "./components/Footer";
// import { MailchimpForm } from "./components/MailchimpForm";
function App() {
  return (
    <div className="App">
      <NavSys />
      <Intro />
      <Skills />
      <PersonalProjects />
      <HireMe />
      <SuggestionBox />
      <Footer /> 
      {/* <MailchimpForm/> */}
    </div>
  );
}

export default App;
