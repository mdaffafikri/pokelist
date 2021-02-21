import React, { Component } from 'react';

export default class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded : false,
            next: '',
            prev: null,
            pokemons: [],            
        }
    }

    componentDidMount(){      
        document.title = 'PokeList'
        
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`)
        .then(data => data.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                next: json.next,
                previous: json.previous,
                number: 1,
                pokemons: json.results //result is contained in the json
            })
        })        
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    nextPage = (link) => {
        fetch(link)
        .then(data => data.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                pokemons: json.results,
                next: json.next,              
                prev: json.previous,
                number: this.state.number+10  
            })
        })
    }

    prevPage = (link) => {
        fetch(link)
        .then(data => data.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                pokemons: json.results,
                next: json.next,              
                prev: json.previous,  
                number: this.state.number-10
            })
        })
    }
    
    render() {    
        const {pokemons, isLoaded, next, prev, number} = this.state  //state
        const {nextPage, prevPage, typeData} = this //function
        return (
            <div>
                <h1>
                    Database
                </h1>
                <table className="table table-bordered table-hover table-responsive w-100 d-block d-md-table">
                    <thead className="thead-inverse thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {pokemons.map((item, i) =>                             
                            <tr className="pointer" key={i}>
                                <td>{i+number}</td>
                                <td>{ this.capitalize(item.name)}</td>
                                <td> <button id="view" className="btn btn-link text-danger view"><i className="fa fa-search" aria-hidden="true"></i>  </button> </td>
                            </tr>                        
                            )}                            
                        </tbody>
                </table>

                <div className="row justify-content-center d-flex">
                    <div className="btn-group" role="group">                    
                        <button disabled={(prev === null) ? true : false  }  className= "btn btn-danger" onClick={() => prevPage(prev)}>Prev</button>
                                        
                        <button className="btn btn-light" onClick={() => nextPage(next)}>Next</button>
                    </div>
                </div>

                <div id="tooltip" role="tooltip">
                    My tooltip
                    <div id="arrow" data-popper-arrow></div>
                </div>
            </div>            
        )
    }
}