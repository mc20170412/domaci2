import React, { Component } from "react";
import DatumVracanja from "./DatumVracanja";


class IzabranaOprema extends Component {
    
    render() {
        const { id, naziv, kategorija, velicina,cena } = this.props.oprema;
     
        return (
            <div>
                <h3>Oprema koju ste iznajmili je: </h3>
                <tr>
                    <td style={{ width: "50px", textAlign: "center" }}>{id}</td>
                    <td>{naziv}</td>
                    <td style={{ width: "200px" }}>{kategorija}</td>
                    <td style={{ width: "50px" }}>{velicina}</td>
                    <td style={{ width: "50px" }}>{cena}</td>

                </tr >
               
             
               <DatumVracanja/>
               



            </div>
        );
    }
}

export default IzabranaOprema;
