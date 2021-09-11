import React, { Component } from "react";

class Oprema extends Component {
    render() {
        var handler  =   this.props.handler;
        const { id, naziv, kategorija, velicina,cena } = this.props.oprema;
        const bk = { id, naziv, kategorija, velicina,cena  }
        return (
            <tr >
                <td style={{ width: "50px", textAlign: "center" }}>{id}</td>
                <td>{naziv}</td>
                <td style={{ width: "200px" }}>{kategorija}</td>
                <td style={{ width: "50px" }}>{velicina}</td>
                <td style={{ width: "50px" }}>{cena}</td>

                <td style={{ width: "100px" }} >
                    <button onClick={()=>handler(bk)}> {/* handler je f-ja od booklista (roditelja) */}
                        Iznajmi
                    </button>
                </td>
            </tr>
        );
    }
}

export default Oprema;