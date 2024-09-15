import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cardd from "../components/card"
import Footer from "../components/footer"
import { HomeScreen } from "../screens/home-screen"
import { AboutScreen } from "../screens/about-screen"
import { NotFound } from "../screens/notfound"

const NavigationStack=()=>
{
    return (
       
        <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
         <Route path="/*" element={<NotFound/>}/>
        </Routes>
       

        
        
    )
}

export default NavigationStack