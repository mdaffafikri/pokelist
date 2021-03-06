import React, { Component, useState, useEffect } from "react";
import MaterialTable from "material-table";
import * as Mui from "@material-ui/core";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      dialogueContent: "https://pokeapi.co/api/v2/pokemon/1/",
      open: false,
      deleteIndex: ''
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

  changeContent = (link) => {
    this.setState({ dialogueContent: link });
  };

  deleteRow = () => {
      var array = [...this.state.pokemons]; // make a separate copy of the array    
      if (this.state.deleteIndex !== -1) {
        array.splice(this.state.deleteIndex, 1);
        this.setState({pokemons: array});
      }    
      this.handleClose()
  }

  handleOpen = (index) => {
    this.setState({open: true, deleteIndex: index})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const { pokemons, open } = this.state; //state
    const { changeContent, handleClose } = this; //function
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
                <Mui.Tooltip title="Delete Data" arrow>                  
                  <button className="btn btn-link text-danger" onClick={() => this.handleOpen(this.indexPoke(rowData.name)) }>
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

        <Mui.Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <Mui.DialogTitle id="alert-dialog-title">{"Confirm"}</Mui.DialogTitle>
            <Mui.DialogContent>
              <Mui.DialogContentText id="alert-dialog-description">
                Are you sure want to delete this row?
              </Mui.DialogContentText>
            </Mui.DialogContent>
            <Mui.DialogActions>
              <Mui.Button onClick={handleClose} color="default">
                <strong>Cancel</strong>
              </Mui.Button>
              <Mui.Button onClick={this.deleteRow} color="secondary" autoFocus>
                <strong>Delete</strong>
              </Mui.Button>
            </Mui.DialogActions>
        </Mui.Dialog>
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