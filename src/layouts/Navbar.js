import React, { useContext } from 'react'
import * as Muicon from "@material-ui/icons";
import {GlobalState} from "../providers/Global"

export default function Navbar() {
    const context = useContext(GlobalState)
    return (
        <div>            
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
                        About
                        </a>
                    </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/#">
                            <Muicon.ShoppingCart></Muicon.ShoppingCart>
                            {context}
                        </a>
                    </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
