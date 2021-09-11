import React, { Component } from "react";
import './App.css';
import ListaOprema from "./components/ListaOprema";
import { BrowserRouter, Route } from 'react-router-dom';
//import logo from "./skiservis.jpg";
class App extends Component {
  state = {
    opreme: [
      {
        id: 1,
        naziv: "Fischer skije  WorldCup JR ",
        kategorija: "deca",
        velicina: 156,
        cena: 700
      },
      {
        id: 2,
        naziv: "Volkl Junior Race Tiger ",
        kategorija: "deca",
        velicina: 130,
        cena: 700
      },
      {
        id: 3,
        naziv: "Elan Amphinion Gold ",
        kategorija: "odrasli",
        velicina: 170,
        cena: 1000
      },
      {
        id: 4,
        naziv: "Fischer Curv 3 ",
        kategorija: "odrasli",
        velicina: 152,
        cena: 1000
      },],
    oprema: {
      id: 5,
      naziv: "Rossignol Maschine ",
      kategorija: "odrasli",
      velicina: 159,
      cena: 1000
    },
    name: "User",
    entered: false
  };
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);


  handleChange(event) {
    this.setState({
      name: event.target.value,
      entered: false
    });

  }

  handleSubmit(event) {

    this.setState({
      /*name: this.state.name, /* ovo je da bi zadrzao vrednost koju upisem a ne ko u handle change*/
      entered: true
    });

    event.preventDefault();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul style={{ decoration: "none", margin: "0", width: "100%", textAlign: "center" }}>
                <li style={{ display: "inline-block", margin: "20px" }}><a href="/">Pocetna</a></li>
                <li style={{ display: "inline-block", margin: "20px" }}><a href="onama.html">O nama</a></li>
                <li style={{ display: "inline-block", margin: "20px" }}><a href="/c">Oprema</a></li>
                <li style={{ display: "inline-block", margin: "20px" }}><a href="kontakt.html">Kontakt</a></li>

            
              </ul>

            </nav>
            <p></p>
            <Route path="/" exact render={() => <div>
              {this.state.entered == false ?
                <form onSubmit={this.handleSubmit}>
                  <ul>
                    <li>
                  <label>
                    Unesi svoje ime: 
                <input type="text" value={this.state.value} onChange={this.handleChange}  />

                  </label>
                  </li>
                  <li>
                  <label>
                    Unesi svoje prezime:
                <input type="text" value={this.state.value}  />
                
                  </label>
                  </li>
                  <li>
                  <label>
                    Unesi svoj JMBG :
                <input type="text" value={this.state.value}  />
                
                  </label>
                  </li>
                  <li>
                  <label>
                    Unesi svoju visinu i tezinu: 
                <input type="text" value={this.state.value}  />
                
                  </label>
                  </li>
                  <input type="submit" value="Enter" />
                  </ul>
                </form> :
                <p>{this.state.name},dobro dosli na internet prodavnicu Ski servis Gaso
                 </p>
                
              }</div>
            }
            />
            <Route path="/c" exact render={() => <ListaOprema
              opreme={this.state.opreme}
            />} />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
