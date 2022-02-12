import React from 'react'
import './Topbar.scss'
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import { Home } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({menuOpen,setMenuOpen}){
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">BusinessProfile.</a>

                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>0731 415 926</span>
                        <MailIcon className="icon"/>
                        <span>andrei.hulea1@gmail.com</span>
                        <a className="social" href="https://github.com/Hulea">
                            <GitHubIcon/>
                        </a>
                        <a className="social" href="https://www.linkedin.com/in/andrei-florin-hulea-7ab5ab1bb/">
                            <LinkedInIcon/>
                        </a>
                    </div>

                </div>



                <div className="right">

                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )

}
