import React, {Component} from "react";
import "./wheelAtributesCSS/wheelSpin.css";


export default class Wheel extends Component {
    constructor() {
        super();

        this.state = {
            num: 0,
            piece: 0
        }
    }

    handleClick = () => {
        this.setState({num: this.state.num + Math.ceil(Math.random() * (600) + 400 )},
            function () {
            document.querySelector(".container").style.transform = "rotate(" + this.state.num +"deg)";
            this.setWheelNumber();
        });
    }

    getPieceByAngle(angle) {
        let pieceNum;
        if (angle < 90)
            pieceNum=Math.abs(angle-90)
        else if (angle > 90 && angle <= 180)
            pieceNum=(360 - angle % 90)
        else if (angle > 180 && angle <= 270)
            pieceNum=(270 - angle % 90)
        else
            pieceNum=(180 - angle % 90)
        return Math.floor(pieceNum / 45 + 1);
    }

    setWheelNumber = () => {
        let angle = this.state.num % 360;
        let pieceNum = this.getPieceByAngle(angle);
        this.setState({piece: pieceNum});
        setTimeout(function() {
            let pieceBox = document.querySelector("#pieceBox");
            pieceBox.textContent = pieceNum.toString();
        }, 3000);
    }

    render() {
        return (
            <div>
                <button id="spin" onClick={this.handleClick}>Spin</button>
                <span className="arrow"></span>
                <i className="arrow-left"></i>
                <div className="container duration">
                    <div className="one">1</div>
                    <div className="two">2</div>
                    <div className="three">3</div>
                    <div className="four">4</div>
                    <div className="five">5</div>
                    <div className="six">6</div>
                    <div className="seven">7</div>
                    <div className="eight">8</div>
                </div>
                <div>{this.state.num % 360}</div>
                <div id="pieceBox" style={{fontSize: '100px'}}></div>
            </div>
        )
    }
}