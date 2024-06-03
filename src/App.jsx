import TodosApp from "./todosApp/TodosApp";
import ScientificCalcApp from "./scientificCalcApp/ScientificCalcApp";
import ImageGalleryApp from "./ImageGalleryManager/ImageGalleryApp";
import Home from "./Home";
import ExpensesTrackerApp from "./expensesTracker/ExpensesTrackerApp";
import { Divide as Hamburger } from "hamburger-react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./RouterStyles.css";
import "./footer.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

import homeLogo from "./assets/homeLogo.jpg";
import { useState } from "react";
// import AppRouter from "./AppRouter";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // const apps = [TodosApp,]
  // let component;

  // switch (window.location.pathname) {
  //   case "/":
  //     break;
  //   case "/todos":
  //     component = <TodosApp />;
  //     break;
  //   case "/sci-calc":
  //     component = <ScientificCalcApp />;
  //     break;
  //   case "/img-gallery":
  //     component = <ImageGalleryApp />;
  //     break;
  // }

  return (
    //
    <>
      <div className="app-container">
        <Router>
          <nav className="app-nav">
            <Link to="/" className="app-title">
              Home
            </Link>

            <div
              className="app-nav-toggler"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Hamburger
                color="white"
                toggled={menuOpen}
                size="40"
                rounded
                toggle={setMenuOpen}
              />
              {/* <span></span>
              <span></span>
              <span></span> */}
            </div>
            <ul className={menuOpen ? "open" : ""}>
              <Link to="/todos">Todos App</Link>
              <Link to="/sci-calc">Scientific-calculator</Link>
              <Link to="/img-gallery">Image-gallery</Link>
              <Link to="/exp-trkr">Expenses-tracker</Link>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodosApp />} />
            <Route path="/sci-calc" element={<ScientificCalcApp />} />
            <Route path="/img-gallery" element={<ImageGalleryApp />} />
            <Route path="/exp-trkr" element={<ExpensesTrackerApp />} />
          </Routes>
        </Router>
        {/* <Router> */}

        {/* <Link to="/" className="nav-logo">
            <img src={homeLogo} alt="logo" />
          </Link>
          <Link to="/todos" className="nav-link">
            Todos-app
          </Link>
          <Link to="/sci-calc" className="nav-link">
            Scientific-Calculator
          </Link>
          <Link to="/img-gallery" className="nav-link">
            Image-Gallery
          </Link>
          <Link to="/exp-tkr" className="nav-link">
            Expenses-Tracker
          </Link> */}
        {/* </nav> */}
        {/* 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodosApp />} />
          <Route path="/sci-calc" element={<ScientificCalcApp />} />
          <Route path="/img-gallery" element={<ImageGalleryApp />} />
          <Route path="/exp-tkr" element={<ExpensesTrackerApp />} />
        </Routes>
      </Router> */}

        <div className="app-footer-body">
          <footer className="app-footer">
            <div className="app-footer-col">
              <h4>products</h4>
              <ul>
                <li>
                  <a href="#">teams</a>
                </li>
                <li>
                  <a href="#">advertising</a>
                </li>
                <li>
                  <a href="#">talent</a>
                </li>
              </ul>
            </div>
            <div className="app-footer-col">
              <h4>network</h4>
              <ul>
                <li>
                  <a href="#">technology</a>
                </li>
                <li>
                  <a href="#">science</a>
                </li>
                <li>
                  <a href="#">business</a>
                </li>
                <li>
                  <a href="#">professional</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </ul>
            </div>
            <div className="app-footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">legal</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
              </ul>
            </div>
            <div className="app-footer-col">
              <h4>follow us</h4>
              <div className="app-links">
                <a href="https://www.linkedin.com/in/yared-yemane-3b1b9b13b">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/YaredYemaneSeyum/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://yaredyemane1@gmail.com">
                  <i className="fab fa-google"></i>
                </a>
                <a href="https://www.github.com/Yared-Yemane">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="app-developer-and-copyright">
              <p className="app-developer">
                <i>Developed By</i> Yared Yemane
              </p>
              <h2 className="app-copyright">&copy;Copyright protected</h2>
            </div>
          </footer>
        </div>
      </div>
    </>
    // {/* <AppRouter />
    // {component} */}
  );
}

export default App;
