import "./App.css";
import { useState } from "react";
import Card from "./components/Card/Card";

function App() {
  const cardElements = [
    {
      heading: "Basic",
      price: "19.99",
      storage: "500 GB",
      users: "2",
      limit: "3 GB",
      plan: "monthly",
      id: 1,
    },
    {
      heading: "Basic",
      price: "199.99",
      storage: "500 GB",
      users: "2",
      limit: "3 GB",
      plan: "annually",
      id: 2,
    },
    {
      heading: "Professional",
      price: "24.99",
      storage: "1 TB",
      users: "5",
      limit: "10 GB",
      plan: "monthly",
      id: 3,
    },
    {
      heading: "Professional",
      price: "249.99",
      storage: "1 TB",
      users: "5",
      limit: "10 GB",
      plan: "annually",
      id: 4,
    },
    {
      heading: "Master",
      price: "39.99",
      storage: "2 TB",
      users: "10",
      limit: "20 GB",
      plan: "monthly",
      id: 5,
    },
    {
      heading: "Master",
      price: "399.99",
      storage: "2 TB",
      users: "10",
      limit: "20 GB",
      plan: "annually",
      id: 6,
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [pricePlan, setPricePlan] = useState("monthly");

  function handleToggle() {
    setToggle((prev) => !prev);
    setPricePlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
  }

  const circleStyle = {
    left: toggle ? "0.5rem" : "2.5rem",
    transition: "all 0.3s ease-out",
  };

  return (
    <div className="flex flex-dir-col App">
      <div className="header flex flex-dir-col">
        <h1 className="heading">Our Pricing</h1>
        <div className="toggle flex flex-dir-row">
          <span className="toggle-span" id="annually">
            Annually
          </span>
          <div className="toggle-icon " onClick={handleToggle}>
            <div className="circle" style={circleStyle}></div>
          </div>
          <span className="toggle-span" id="monthly">
            Monthly
          </span>
        </div>
      </div>
      <div className="cards">
        {cardElements
          .filter((cardel) => cardel.plan === pricePlan)
          .map((element) => (
            <Card key={element.id} element={element}></Card>
          ))}
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Meenakshi</a>.
      </div>
    </div>
  );
}

export default App;
