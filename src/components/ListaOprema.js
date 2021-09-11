import React, { Component } from "react";
import IzabranaOprema from "./IzabranaOprema";
import Oprema from "./Oprema";

class ListaOprema extends Component {
    state = {
        showChosen: false,
        izabranaOprema: {}
    };
    handler(someArg){
        const doesShow = this.state.showChosen;
        this.setState({
            showChosen: true,
            izabranaOprema: someArg
        });
    }
    render() {
        const opreme = this.props.opreme;
        var handler  =   this.handler;
        return (
            <div>
                { this.state.showChosen == false ?
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: "50px", textAlign: "center" }}>#</th>
                                <th>Naziv</th>
                                <th>Kategorija</th>
                                <th>Velicina</th>
                                <th>Cena</th>
                                <th style={{ width: "148px" }}>Iznajmi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {opreme.map(oprema => {
                                return (
                                    <Oprema
                                        key={oprema.id}
                                        oprema={oprema}
                                        handler={handler.bind(this)}
                                    />
                                );
                            })
                            }
                        </tbody>
                    </table> : <div>
                        <IzabranaOprema oprema={this.state.izabranaOprema}/>
                    </div>
                }
            </div>
        );
    }
}

export default ListaOprema;