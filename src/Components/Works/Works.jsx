import React from 'react'
import './Works.scss'
import { useEffect, useState } from "react";

export default function Works(){


    const [currentSlide,setCurrentSlide] = useState(0)

    const data = [
        {
            id: "1",
            icon: "./assets/writing.png",
            title: "Plantling Classifier",
            desc:
              "A neural network model for plantling recognition, used in a real-time camera app for image recognition",
            img:
              "https://mfiles.alphacoders.com/753/753208.jpg",
        },
        {
            id: "2",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
              "A web UI project for displaying a business profile using React",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "3",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
                "A realtime Covid Tracker with up-to-date statistics using Android Studio, Swift and Flutter",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
          
        ];



        const handleClick = (way) =>{
            way === "left" ? setCurrentSlide(currentSlide >0 ? currentSlide-1 : 2)
            : setCurrentSlide(currentSlide<data.length - 1 ? currentSlide+1 : 0)
        }



    return(
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>

                {data.map(d =>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img}
                             alt="" />
                        </div>
                    </div>
                    </div>
                    ))}
            </div>

            <img src="assets/arrow.png" className="arrow left" alt=""
            onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt=""
            onClick={() => handleClick("right")} />

        </div>
    )

}
