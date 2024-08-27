import Cardd from "./components/card"
import NavBar from "./components/nav";
import { ClassComponent } from "./classComp/classComp";
import DefaultCarousel from "./components/carousel";
import Footer from "./components/footer";
import { InstagramLoader } from "./components/instaconload";
import { GitIcon } from "./components/devicons";
function App() {
  return (
    <>
      <NavBar />
      <DefaultCarousel/>
      <ClassComponent></ClassComponent>
      <Footer/>
    </>
  );
}

export default App;