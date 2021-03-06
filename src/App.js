// import logo from './logo.svg';
import "./App.css";
import * as Mui from "@material-ui/core";
import * as Muicon from "@material-ui/icons";
import Content from "./pages/Content";

import "font-awesome/css/font-awesome.min.css";

require("bootstrap");

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand" href="/#">
          PokeList
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">          
          <ul className="navbar-nav ml-auto">
           <li className="nav-item active">
              <a className="nav-link" href="/#">
                Pokemon
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Region
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                About
              </a>
            </li></ul>
        </div>
      </nav>

      <div className="container mt-5">
        <Content></Content>
      </div>

      <footer>
        <div className="mt-5 pb-5">&copy; 2021 </div>
      </footer>
    </div>
  );
}

export default App;
