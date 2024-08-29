import Cardd from "./components/card"
import NavBar from "./components/nav";
import { ClassComponent } from "./classComp/classComp";
import DefaultCarousel from "./components/carousel";
import Footer from "./components/footer";
import { InstagramLoader } from "./components/instaconload";
import { GitIcon } from "./components/devicons";
import RecipeList from "./Recipe/recipe";
import { FakeStore } from "./Recipe/fakestore";
import Counter from "./components/Hooks";
import { DynamicTable } from "./Tasks/task1";
function App() {
  return (
    <>
   <DynamicTable/>
    </>
  );
}

export default App;