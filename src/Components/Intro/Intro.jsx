import React from 'react';
import './Intro.scss';
import { useEffect, useRef} from 'react';
import { init } from 'ityped';
export default function Intro(){

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,
            {
                showCursor:false,
                strings:["Student","Entrepreneur"],
                backDelay:1500,
                backSpeed:60,
                showCursor:true
            });
    },[]);

    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img className="img" src="assets/WhatsApp Image 2020-09-28 at 08.02.32.jpeg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hi there, I'm</h2>
                    <h1>Hulea Andrei</h1>
                    <h3>Currently  <span ref={textRef}>Developer</span></h3>
                </div>
                <a href="#portofolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )

}
