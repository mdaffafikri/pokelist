import React, { Component, useState, useEffect } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import * as Mui from "@material-ui/core";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      next: "",
      prev: null,
      pokemons: [],
      dialogueContent: "https://pokeapi.co/api/v2/pokemon/1/",
    };
  }

  componentDidMount() {
    document.title = "PokeList";

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500`)
      .then((data) => data.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          next: json.next,
          previous: json.previous,
          number: 1,
          pokemons: json.results, //result is contained in the json
        });
      });
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  indexPoke = (string) => {
    return this.state.pokemons.findIndex((obj) => obj.name === string);
  };

  nextPage = (link) => {
    fetch(link)
      .then((data) => data.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          pokemons: json.results,
          next: json.next,
          prev: json.previous,
          number: this.state.number + 10,
        });
      });
  };

  prevPage = (link) => {
    fetch(link)
      .then((data) => data.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          pokemons: json.results,
          next: json.next,
          prev: json.previous,
          number: this.state.number - 10,
        });
      });
  };

  changeContent = (link) => {
    this.setState({ dialogueContent: link });
  };

  deleteRow = (index) => {
    // if(confirm('Are u sure want to delete this row?') === true)
    var array = [...this.state.pokemons]; // make a separate copy of the array    
     if (index !== -1) {
      array.splice(index, 1);
      this.setState({pokemons: array});
    }    
  }

  render() {
    const { pokemons, isLoaded, next, prev, number } = this.state; //state
    const { nextPage, prevPage, changeContent } = this; //function
    return (
      <div className="pokemonsTable">

        <PopDialogue link={this.state.dialogueContent}></PopDialogue>

        <MaterialTable
          columns={[
            { title: "Index", field: "number", render: (rowData) => this.indexPoke(rowData.name) + 1 },
            { title: "Name", field: "name", render: (rowData) => this.capitalize(rowData.name) },
            { title: "Action", field: "url",
              render: (rowData) => (<>
                <Mui.Tooltip title="Show Details" arrow>
                  <button
                    onClick={() => changeContent(rowData.url)}
                    data-toggle="modal"
                    data-target="#popDialogue"
                    data-tip
                    data-for="viewTip"
                    className="btn btn-link text-danger view"
                  >
                    <i class="fa fa-info fa-lg" aria-hidden="true"></i>{" "}
                  </button>
                </Mui.Tooltip>        
                <Mui.Tooltip title="Delete Data">                  
                  <button className="btn btn-link text-danger" onClick={() => this.deleteRow(this.indexPoke(rowData.name)) }>
                    <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
                  </button>
                </Mui.Tooltip>
                </>        
              ),
            },            
          ]}
          data={pokemons}
          title="Pokemon Database"
        />
      </div>
    );
  }
}

var PopDialogue = (props) => {
  let [name, setName] = useState("");
  let [type, setType] = useState([]);
  let [sprite, setSprite] = useState(null);
  let [stats, setStats] = useState(null);
  let [loading, setLoading] = useState([]);

  let capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    let getData = () => {
      setLoading(true);
      fetch(props.link)
        .then((data) => data.json())
        .then((json) => {
          setName(json.name);
          setType(json.types);
          setSprite(json.sprites);
          setStats(json.stats);
          setLoading(false);
        });
    };
    getData();
  }, [props.link]);

  let rotateSprite = (front) => {
    if (front) {
      document.getElementById("sprite").src = sprite.front_default;
    } else {
      document.getElementById("sprite").src = sprite.back_default;
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="popDialogue"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Pokemon Detail
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex justify-content-around">
              {loading ? (
                <div className="spinner-border text-danger" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <>
                  <div>
                    <button
                      onClick={() => rotateSprite(true)}
                      type="button"
                      class="btn btn-link text-danger"
                    >
                      {" "}
                      <i class="fa fa-undo fa-2x" aria-hidden="true"></i>{" "}
                    </button>
                    <img
                      id="sprite"
                      className="sprite"
                      width="150"
                      src={sprite.front_default}
                      alt={sprite.front_default}
                    />
                    <button
                      onClick={() => rotateSprite(false)}
                      type="button"
                      class="btn btn-link text-danger"
                    >
                      {" "}
                      <i
                        class="fa fa-undo fa-flip-horizontal fa-2x"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                  <div>
                    <table className="table table-borderless table-sm text-left table-view">
                      <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td>{capitalize(name)}</td>
                      </tr>
                      <tr>
                        <td>Attack</td>
                        <td>:</td>
                        <td>{stats[1].base_stat}</td>
                      </tr>
                      <tr>
                        <td>Defense</td>
                        <td>:</td>
                        <td>{stats[2].base_stat}</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>:</td>
                        <td>
                          {type.map((item, index) => (
                            <li className="list-unstyled" key={index}>
                              {" "}
                              {capitalize(item.type.name)}
                            </li>
                          ))}
                        </td>
                      </tr>
                    </table>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-link text-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
