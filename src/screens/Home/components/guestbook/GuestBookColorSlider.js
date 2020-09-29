import React, { useState } from 'react';

function ColorSlider(props) {

    const colors = ["#56667A", "#1D2F47", "#31517A", "#8BA5C7", "#28263B", "#2D3145", "#2D3E45", "#263A3B"];
    const [activeColorIndex, setActiveColorIndex] = useState(0);

    function changeActiveColor(index) {
        setActiveColorIndex(index);
        props.change(colors[index]);
    }

    return (
        <div className="colorSliderWrapper">
            {colors.map((color, index) => <Cell change={changeActiveColor} setting={{color, index, ...{active: index === activeColorIndex}}}/>)}
        </div>
    );
}

function Cell(props) {

    const { active, color, index } = props.setting;

    return (
        <div style={{
            backgroundColor: color,
            width: active ? "120%" : "80%",
            height: active ? "35px" : "25px"
            
        }}
        onClick={() => props.change(index)}
        ></div>
    );
}

export default ColorSlider;