import React from 'react'
import './Testimonials.scss'

export default function Testimonials(){


    const data = [
        {
          id: 1,
          name: "Bill Gates",
          title: "Found of Microsoft",
          img:
            "data:image/jpeg;base64,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",
          icon: "assets/linkedin.png",
          desc:
            "Nice",
        },
        {
          id: 2,
          name: "Jeff Bezos",
          title: "Amazon CEO",
          img:
            "data:image/jpeg;base64,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",
          icon: "assets/linkedin.png",
          desc:
            "Keep up the good work",
          featured: true,
        },
        {
          id: 3,
          name: "Elon Musk",
          title: "Tesla and space stuff",
          img:
            "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
          icon: "assets/twitter.png",
          desc:
            "The future of mankind rests on your shoulders!",
        },
      ];


    return(
        <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          {data.map((d) => (
            <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img
                  className="user"
                  src={d.img}
                  alt=""
                />
                <img className="right" src={d.icon} alt="" />
              </div>
              <div className="center">
                {d.desc}
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }