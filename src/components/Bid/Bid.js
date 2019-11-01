import React from "react";

export default class Bid extends React.Component {
    render() {
        return(
            <div style={{ 
                height: this.props.style.height,
                width: "100%",
                backgroundColor: this.props.style.backgroundColor,
                float: "left"
            }}>
            </div>
        );
    }
}