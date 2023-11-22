import './App.css';
import AboutMe from './about-me/AboutMe';
import ContactMe from './contactMe/ContactMe';
import Home from './home/Home';
import VideoPage from './videosPage/VideoPage';
import YogaBenefits from './yogaBenefits/YogaBenefits';
import BuyClass from './buyClass/BuyClass';
import Fqa from './FAQ/Fqa';
import Footer from './footer/Footer';


function App() {
  return (
    <div className="App">
     <Home/>
     <AboutMe/>
     <ContactMe/>
     <VideoPage/>
     <BuyClass/>
     <ContactMe/>
     <YogaBenefits/>
     <Fqa/>
     <ContactMe/>
     <Footer/>
     
    </div>
  );
}

export default App;
