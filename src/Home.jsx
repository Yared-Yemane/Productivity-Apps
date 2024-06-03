import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
// import todos from "./assets/todos.PNG";

const Home = () => {
  const homeCards = [
    {
      id: 1,
      imgSrc: "",
      cardTitle: "title 1",
      cardDesc:
        "productivity software assists people to perform assigned tasks in addition to enhancing communication and collaboration. Initially productivity software was for business use. Nowadays, various types are even used to achieve personal productivity as well.",
    },
    {
      id: 2,
      imgSrc: "",
      cardTitle: "title 2",
      cardDesc:
        "productivity software assists people to perform assigned tasks in addition to enhancing communication and collaboration. Initially productivity software was for business use. Nowadays, various types are even used to achieve personal productivity as well.",
    },
    {
      id: 3,
      imgSrc: "",
      cardTitle: "title3",
      cardDesc:
        "productivity software assists people to perform assigned tasks in addition to enhancing communication and collaboration. Initially productivity software was for business use. Nowadays, various types are even used to achieve personal productivity as well.",
    },
  ];
  return (
    <AnimatedPage>
      <div className="homepage-container">
        <div className="homepage-card-container">
          <div className="homepage-card">
            <Link to="/todos" className="homepage-btn">
              <img src="src/assets/todos.PNG" alt="Todos app" />
            </Link>
            <div className="homepage-card-content">
              <h3>Todos App</h3>
              <p>
                To do lists come in all shapes and sizes. It always used to be
                something that you would write using pen and paper, but thanks
                to technology there’s an app that can come to the rescue.
              </p>
              <Link to="/todos" className="homepage-btn">
                Explore
              </Link>
            </div>
          </div>
          <div className="homepage-card">
            <Link to="/img-gallery" className="homepage-btn">
              <img
                src="src/assets/img-gallery.PNG"
                alt="Image-gallery manager"
              />
            </Link>
            <div className="homepage-card-content">
              <h3>Image Gallery</h3>
              <p>
                An image gallery manager can be incredibly effective for
                e-commerce sites, especially those dealing in fashion, home
                decor, or any product where aesthetics play a significant role.
              </p>
              <Link to="/img-gallery" className="homepage-btn">
                Explore
              </Link>
            </div>
          </div>
          <div className="homepage-card">
            <Link to="/exp-trkr" className="homepage-btn">
              <img src="src/assets/exp-tkr.PNG" alt="Expenses tracker" />
            </Link>
            <div className="homepage-card-content">
              <h3>Expenses Tracker</h3>
              <p>
                Expense tracking means recording all your expenditures so you
                have a clear and detailed understanding of your budget, to
                identify and eliminate wasteful spending habits in your
                financial life.
              </p>
              <Link to="/exp-trkr" className="homepage-btn">
                Explore
              </Link>
            </div>
          </div>
          <div className="homepage-card">
            <Link to="/sci-calc" className="homepage-btn">
              <img src="src/assets/sci-calc.PNG" alt="Scientific calculator" />{" "}
            </Link>
            <div className="homepage-card-content">
              <h3>Scientific Calculator</h3>
              <p>
                The HTML Scientific Calculator is a tool for performing advanced
                scientific calculations like finding exponents, logarithms,
                factorials, and more. <br />
                <br /> <i>This calculator comprises two sections:</i> the input
                section, where the user types in their mathematical problem, and
                the output screen, which displays all the outputs related to the
                particular mathematical problem.
              </p>
              <Link to="/sci-calc" className="homepage-btn">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
