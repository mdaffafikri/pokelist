// import logo from './logo.svg';
import "./App.css";
import * as Mui from "@material-ui/core";
import * as Muicon from "@material-ui/icons";

import Navbar from "./layouts/Navbar";
import Content from "./pages/Content";
import Shop from "./pages/Shop"
import Timeline from "./pages/Timeline"

import { GlobalState } from "./providers/Global"

import "font-awesome/css/font-awesome.min.css";

import {useState} from "react"

require("bootstrap");
function App() {
  const [total, setTotal] = useState(0)
  const [item, setItem] = useState({})

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <GlobalState.Provider 
        value={{
            total, setTotal,
            item, setItem
          }}
      >

        <Navbar></Navbar>
        <div className="container mt-5">
            <br id="pokeshop"/>
            <Shop></Shop>      
            <br id="pokedex"/>
            <Content></Content>
            <br id="history"/>
            <Timeline></Timeline>
            <br/>
        </div>

      </GlobalState.Provider>

      <footer>
        <div className="mt-5 pb-3 pt-3 bg-dark text-light">
            &copy; 2021 
        </div>
      </footer>
    </div>
  );
}

export default App;
