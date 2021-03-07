// import logo from './logo.svg';
import "./App.css";
import * as Mui from "@material-ui/core";
import * as Muicon from "@material-ui/icons";
import Content from "./pages/Content";

import Navbar from "./layouts/Navbar";

import { GlobalState } from "./providers/Global"

import "font-awesome/css/font-awesome.min.css";

require("bootstrap");
function App() {

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <GlobalState.Provider value="0">

        <Navbar></Navbar>
        <div className="container mt-5">
            <Content></Content>
        </div>

      </GlobalState.Provider>

      <footer>
        <div className="mt-5 pb-5">&copy; 2021 </div>
      </footer>
    </div>
  );
}

export default App;
