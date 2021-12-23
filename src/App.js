import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import{BrowserRouter  as Router,Routes ,Route} from "react-router-dom";
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"


function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer} />
      <Heading text= "STAR PRODUCTS" />
      <StarProduct starProduct ={data.starProduct} />
      <Heading text= "HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
      <Route exact path = "/music" element={ <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
      
      </Routes>
      
      </Router>
    // this is jsx(combination of js and html)
  );
}

export default App;
