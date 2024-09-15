import Cardd from "./components/card"
import NavBar from "./components/nav";
import { ClassComponent, TableComponent } from "./classComp/classComp";
import DefaultCarousel from "./components/carousel";
import Footer from "./components/footer";
import { InstagramLoader } from "./components/instaconload";
import { GitIcon } from "./components/devicons";
import RecipeList from "./Recipe/recipe";
import { FakeStore } from "./Recipe/fakestore";
import Counter from "./components/Hooks";
import { DynamicTable } from "./Tasks/task1";
import { BsLightbulb } from "react-icons/bs";
import Todo from "./hooks/setState";
import UseRefExample from "./hooks/useref";
import Uncontrolled from "./hooks/uncontrolled";
import Controlled from "./hooks/controlled";
import DropDownn from "./hooks/dropdown";
import NavigationStack from "./navigations/navigation-stack";
import { BrowserRouter } from "react-router-dom";
import { NaviBar } from "./navigations/navbar";
function App() {
  
  return (
    <>
     <BrowserRouter>
     <NaviBar/>
     <NavigationStack/>
     </BrowserRouter>

    </>
   
  );
}

export default App;