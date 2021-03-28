import React, { useContext, useState } from 'react'
import * as Mui from "@material-ui/core";
import * as Muicon from "@material-ui/icons";
import {GlobalState} from "../providers/Global"

export default function Navbar() {
    const cart = useContext(GlobalState)

    let [drawerOpen, setDrawerOpen] = useState(false)
    const toggleDrawer = (isOpen) => {
        setDrawerOpen(isOpen)
    }

    let removeItem = (name) => {
        var itemList = {...cart.item}
        
        if(itemList[name] <= 1){
            delete itemList[name]
            console.log();
        }else{
            itemList[name] --
        }
        cart.setItem(itemList)
        cart.setTotal(cart.total-1)
    }

    let addItem = (name) => {        
        var itemList = {...cart.item}
        itemList[name] ++
        cart.setItem(itemList)
        cart.setTotal(cart.total+1)
    }

    return (
        <div>            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand" href="/#">
                PokeCenter
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">          
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#pokeshop">
                        PokeShop
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pokedex">
                        PokeDex
                        </a>
                    </li>                    
                    <li className="nav-item">
                        <a className="nav-link" href="#history">
                        History
                        </a>
                    </li>                    
                </ul>
                <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                        <a className="nav-link" href="/#" onClick={()=>toggleDrawer(true)}>
                            <Mui.Badge badgeContent={cart.total} invisiblity="true" color="secondary">
                                <Muicon.ShoppingCart>
                                </Muicon.ShoppingCart>                        
                            </Mui.Badge>                            
                        </a>
                    </li>

                    </ul>
                </div>
            </nav>

            <React.Fragment>                
                <Mui.Drawer anchor={'right'} open={drawerOpen} onClose={()=>toggleDrawer(false)}>
                    <div style={{ width: '250px', height:'100%', padding: '20px', borderLeft: '#dc3545 solid 5px'}}>
                        <h4>                    
                            Cart
                        </h4>                                        
                        <ul className="list-group list-group-flush">
                                {(Object.keys(cart.item).length === 0) ? "Nothing..." :
                                    Object.keys(cart.item).map((key, i) => {
                                        return(                             
                                            <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                                                {key}                                        
                                                <span>
                                                    <button onClick={()=>removeItem(key)} className="btn btn-link text-danger btn-sm"><i className="fa fa-minus" aria-hidden="true"></i></button>
                                                    <span className="badge badge-danger badge-pill">
                                                        {cart.item[key]}
                                                    </span>
                                                    <button onClick={()=>addItem(key)} className="btn btn-link text-danger btn-sm"><i className="fa fa-plus" aria-hidden="true"></i></button>
                                                </span>
                                            </li>                                                     
                                        )
                                    })
                                }        
                        </ul>
                        <br/>
                    </div>
                    <button className="btn btn-sm btn-danger mb-3" style={{position: 'absolute', bottom: 0}}>
                        <i className="fa fa-check" aria-hidden="true"></i> &nbsp;
                        Checkout
                    </button>
                </Mui.Drawer>
            </React.Fragment>
        </div>
    )
}
