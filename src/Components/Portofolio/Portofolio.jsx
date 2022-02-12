import React, { useEffect, useState } from "react";
import PortofolioList from '../PortofolioList/PortofolioList';
import './Portofolio.scss'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data";


export default function Portofolio(){
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
      {
        id: "featured",
        title: "Featured",
      },
      {
        id: "web",
        title: "Web Apps",
      },
      {
        id: "mobile",
        title: "Mobile Apps",
      },
      {
        id: "design",
        title: "Design",
      },
      {
        id: "content",
        title: "Content",
      },
    ];

    useEffect(() => {
      switch (selected) {
        case "featured":
          setData(featuredPortfolio);
          break;
        case "web":
          setData(webPortfolio);
          break;
        case "mobile":
          setData(mobilePortfolio);
          break;
        case "design":
          setData(designPortfolio);
          break;
        case "content":
          setData(contentPortfolio);
          break;
        default:
          setData(featuredPortfolio);
      }
    }, [selected]);

    return (
      <div className="portfolio" id="portfolio">
        <h1>Not a Fake Portofolio</h1>
        <ul>
          {list.map((item) => (
            <PortofolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img
                src={d.img}
                alt=""
              />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
