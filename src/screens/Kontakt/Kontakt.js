import React from "react";

import Bid from "./../../components/Bid/Bid";

export default class Kontakt extends React.Component {
    render() {
        return(
            <div>
                <Bid style={{ backgroundColor: "rgb(22, 30, 39)", height: 300 }} />
                <Bid style={{ backgroundColor: "rgb(230, 232, 236)", height: 800 }} />
                <Bid style={{ backgroundColor: "rgb(245, 246, 248)", height: 500 }} />
            </div>
        );
    }
}