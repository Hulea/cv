import React from "react";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Portofolio from "./Components/Portofolio/Portofolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Topbar from "./Components/Topbar/Topbar";
import Works from "./Components/Works/Works";
import "./Home.scss"
import {useState} from "react";
import Menu from "./Components/Menu/Menu";
export default function Task3(){


    const [menuOpen,setMenuOpen] = useState(false);

        return(

            <div className="app">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <div className="sections">
                    <Intro/>
                    <Portofolio/>
                    <Works/>
                    <Testimonials/>
                    <Contact/>
                </div>
            </div>

        )
}
