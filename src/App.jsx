import Cardd from "./components/card"
import NavBar from "./components/nav";
import { ClassComponent } from "./classComp/classComp";
import DefaultCarousel from "./components/carousel";
import Footer from "./components/footer";
import { InstagramLoader } from "./components/instaconload";
import { GitIcon } from "./components/devicons";
import RecipeList from "./Recipe/recipe";
import { FakeStore } from "./Recipe/fakestore";
function App() {
  return (
    <>
      <FakeStore/>
    </>
  );
}

export default App;