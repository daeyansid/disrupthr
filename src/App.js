import './App.css';
import Navbar from '../src/Components/Navbar/Navbar.jsx';
import Intro from './Components/Intro/Intro.jsx';
import SectionA from './Components/Section A/SectionA.jsx';
import SectionB from './Components/SectionB/SectionB.jsx';
import GetIn from './Components/Get in Touch/GetIn.jsx';
import Help from './Components/Help/Help.jsx';
import Banner from './Components/Banner/Banner.jsx';
import Card from './Components/Cards/Card.jsx';
import Footer from './Components/Footer/Footer.jsx';



function App() {
  return (
   <>
    <Navbar />
    <Intro />
    <SectionA />
    <SectionB />
    <GetIn />
    <Help />
    <Banner />
    <Card />
    <Footer />
   </>
  );
}

export default App;
