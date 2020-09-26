import React from 'react';

import Sketch from "react-p5";

function FloatText(props) {

    let texts = [];
    let queue = null;
    let loaded = false;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(700, 500).parent(canvasParentRef);
    }

    const draw = (p5) => {

        if (!loaded) {
            texts.push(new Flo(p5, "Fed side", "- David Hansson", "25/09/2020", true));
            texts.push(new Flo(p5, "Yay", "- Random gut", "22/09/2020", false));
            texts.push(new Flo(p5, "Skud ud til græs", "- Igen her", "21/09/2020", false));
            texts.push(new Flo(p5, "Altid godt", "- Random igen", "24/09/2020", false));
            loaded = true;
        }

        p5.background(32, 38, 46);

        for (let i = 0; i < texts.length; i++) {
            texts[i].update();
        }

        if (queue != null) {
            texts.push(new Flo(p5, "TEST", "- TEST", "25/09/2020", true));
            queue = null;
        }

    }

    function Flo(p5, message, author, date, isAuthor) {
        this.message = message;
        this.author = author;
        this.date = date;
        this.isAuthor = isAuthor

        this.size = p5.random(16, 40);
        this.secondSize = p5.map(this.size, 16, 40, 10, 16);

        this.vec = p5.createVector(p5.random(p5.width), p5.random(p5.height));

        this.speed = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));


        this.update = () => {
            this.pushForMouse();
            this.drive();
            this.edges();

            this.isAuthor ? p5.fill(0, 166, 255) : p5.fill(255);

            p5.textAlign(p5.CENTER);
            p5.textSize(this.size);
            p5.text(this.message, this.vec.x, this.vec.y);
            p5.textSize(this.secondSize);
            p5.text(this.author, this.vec.x, this.vec.y + this.size);
            p5.text(this.date, this.vec.x, this.vec.y + (this.size + this.secondSize));
        }

        this.pushForMouse = () => {
            if (p5.dist(this.vec.x, this.vec.y, p5.mouseX, p5.mouseY) < this.size * 3) {

                const sP = ((45 - this.size) / 5) / 5;
                const sM = -(((45 - this.size) / 5) / 5);

                const newSpeed = p5.createVector(
                    p5.map(this.vec.x - p5.mouseX, -(this.size * 3), this.size * 3, sM, sP),
                    p5.map(this.vec.y - p5.mouseY, -(this.size * 3), this.size * 3, sM, sP),
                );

                this.speed.x += newSpeed.x;
                this.speed.y += newSpeed.y;

            }
        }

        this.drive = () => {
            this.vec.x += this.speed.x;
            this.vec.y += this.speed.y;
        }

        this.edges = () => {

            const newS = ((45 - this.size) / 5) / 3;

            // x
            if (this.vec.x - 100 > p5.width) { this.vec.x = -100; this.speed.x = newS }
            if (this.vec.x + 100 < 0) { this.vec.x = p5.width + 100; this.speed.x = -newS }

            // y
            if (this.vec.y - 100 > p5.height) { this.vec.y = -100; this.speed.y = newS }
            if (this.vec.y + 100 < 0) { this.vec.y = p5.height + 100; this.speed.y = -newS }
        }

    }

    return (
        <div className="guestBookChild" style={{ height: "500px", width: "700px", backgroundColor: "white" }}>
            <Sketch setup={setup} draw={draw} />
            <button onClick={() => queue = "Test"} id="newGuestBookItem"></button>
        </div>
    )
};

export default FloatText;