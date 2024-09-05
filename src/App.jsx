import Cardd from "./components/card"
import NavBar from "./components/nav";

import DefaultCarousel from "./components/carousel";
import Footer from "./components/footer";
import { InstagramLoader } from "./components/instaconload";
import { GitIcon } from "./components/devicons";
function App() {
  return (
    <>
      <NavBar />
      <DefaultCarousel />
      <div style= {{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly",padding:"4px"}}>
      <Cardd/>
      <Cardd/>
      <Cardd/>
      <Cardd/>
      </div>
      <GitIcon/>
      <InstagramLoader/>
      <Footer/>
    </>
  );
}

export default App;