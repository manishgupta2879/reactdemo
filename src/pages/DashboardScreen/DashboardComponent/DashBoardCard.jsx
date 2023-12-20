import React from "react";
//----------------------------------User Card Array ----------------------------------
const cardData = [
  {
    title: "User Details",
    subtitle: "Anmol Sharma ",
    text: "Some quick example text for Card 1.",
    link1: "User Profile",
    link2: "User Mail",
  },
  {
    title: "User Details",
    subtitle: "Abhimanyu Gautam ",
    text: "Some quick example text for Card 2.",
    link1: "User Profile",
    link2: "User Mail",
  },{
    title: "User Details",
    subtitle: "Sonam Gupta  ",
    text: "Some quick example text for Card 2.",
    link1: "User Profile",
    link2: "User Mail",
  },{
    title: "User Details",
    subtitle: "Neha Goel ",
    text: "Some quick example text for Card 2.",
    link1: "User Profile",
    link2: "User Mail",
  },{
    title: "User Details",
    subtitle: "Priyanka Pandey ",
    text: "Some quick example text for Card 2.",
    link1: "User Profile",
    link2: "User Mail",
  },
 
];

function DashBoardCard() {
  return (
    <div className="p-3 mt-4  d-flex dashheadcolor">
      {cardData.map((card, index) => (
        <div key={index} className="card" style={{ width: "25rem" , marginLeft: '22px' }}>
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {card.subtitle}
            </h6>
            <p className="card-text">{card.text}</p>
            <a href="/" className="card-link">
              {card.link1}
            </a>
            <a href="/" className="card-link">
              {card.link2}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashBoardCard;
