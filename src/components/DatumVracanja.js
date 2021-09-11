import React, { Component } from "react";

class DatumVracanja extends Component {
    countReturnDate() {

        var date = new Date();
        var returnDate = new Date(date);
        returnDate.setDate(date.getDate() + 30);
        return returnDate.toDateString();
    }
    render() {

        return (
            <p>
                Datum do kojeg ste iznajmili opremu: {this.countReturnDate()}
            </p>
        );
    }
}

export default DatumVracanja;