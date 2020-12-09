import React from 'react';
import VirtualKeyboard from "../components/virtualKeyboard";
import '../../css/study.css'
import {MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBIcon} from "mdbreact";
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default class KeyLearn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hintKey: "q",
            handleKey: [""],
            targetKey: "",
            correctKeyCount: 0,
            keyCount: 0,
            correctKeyCountColor: "",
            correctPercentColor: ""
        }
    }

    componentDidMount() {
        this.generateKey();
    }

    generateKey = ()=>{
        let nextKey = Math.floor(Math.random() * 22 + 1);
        switch (nextKey){
            case 1:
                this.setState({
                    hintKey: "q",
                    handleKey: ["q"],
                    targetKey: "S"
                })
                break;
            case 2:
                this.setState({
                    hintKey: "w",
                    handleKey: ["w"],
                    targetKey: "K"
                })
                break;
            case 3:
                this.setState({
                    hintKey: "e",
                    handleKey: ["e"],
                    targetKey: "R"
                })
                break;
            case 4:
                this.setState({
                    hintKey: "r f",
                    handleKey: ["r", "f"],
                    targetKey: "N"
                })
                break;
            case 5:
                this.setState({
                    hintKey: "t",
                    handleKey: ["t"],
                    targetKey: "H"
                })
                break;
            case 6:
                this.setState({
                    hintKey: "u",
                    handleKey: ["u"],
                    targetKey: "*"
                })
                break;
            case 7:
                this.setState({
                    hintKey: "i",
                    handleKey: ["i"],
                    targetKey: "W"
                })
                break;
            case 8:
                this.setState({
                    hintKey: "o l",
                    handleKey: ["o", "l"],
                    targetKey: "J"
                })
                break;
            case 9:
                this.setState({
                    hintKey: "p",
                    handleKey: ["p"],
                    targetKey: "N"
                })
                break;
            case 10:
                this.setState({
                    hintKey: "[",
                    handleKey: ["["],
                    targetKey: "T"
                })
                break;
            case 11:
                this.setState({
                    hintKey: "a",
                    handleKey: ["a"],
                    targetKey: "T"
                })
                break;
            case 12:
                this.setState({
                    hintKey: "s",
                    handleKey: ["s"],
                    targetKey: "P"
                })
                break;
            case 13:
                this.setState({
                    hintKey: "d",
                    handleKey: ["d"],
                    targetKey: "H"
                })
                break;
            case 14:
                this.setState({
                    hintKey: "g",
                    handleKey: ["g"],
                    targetKey: "S"
                })
                break;
            case 15:
                this.setState({
                    hintKey: "j",
                    handleKey: ["j"],
                    targetKey: "I"
                })
                break;
            case 16:
                this.setState({
                    hintKey: "k",
                    handleKey: ["k"],
                    targetKey: "Y"
                })
                break;
            case 17:
                this.setState({
                    hintKey: ";",
                    handleKey: [";"],
                    targetKey: "G"
                })
                break;
            case 18:
                this.setState({
                    hintKey: "'",
                    handleKey: ["'"],
                    targetKey: "K"
                })
                break;
            case 19:
                this.setState({
                    hintKey: "c",
                    handleKey: ["c"],
                    targetKey: "U"
                })
                break;
            case 20:
                this.setState({
                    hintKey: "v",
                    handleKey: ["v"],
                    targetKey: "O"
                })
                break;
            case 21:
                this.setState({
                    hintKey: "n",
                    handleKey: ["n"],
                    targetKey: "E"
                })
                break;
            case 22:
                this.setState({
                    hintKey: "m",
                    handleKey: ["m"],
                    targetKey: "A"
                })
                break;
            default:
                break;
        }
    }

    handleKeyUp = (key)=>{
        if(this.state.handleKey.indexOf(key) === -1){
            this.setState({
                keyCount: this.state.keyCount + 1
            })
        }
        else{
            this.generateKey();
            this.setState({
                correctKeyCount: this.state.correctKeyCount + 1,
                keyCount: this.state.keyCount + 1
            })
        }
        let p = this.state.correctKeyCount/this.state.keyCount;
        if(p < 0.4) {
            this.setState({
                correctPercentColor: "#BB0000"
            })
        }else if(p >= 0.4 && p < 0.7){
            this.setState({
                correctPercentColor: "#F7B217"
            })
        }
        else{
            this.setState({
                correctPercentColor: "#00BB00"
            })
        }
    }

    reload = ()=>{
        this.generateKey();
        this.setState({
            correctKeyCount: 0,
            keyCount: 0,
            correctKeyCountColor: "",
            correctPercentColor: ""
        })
    }

    render(){
        return (
            <>
                <MDBCard color="mdb-color" text="white" className="text-center card-body target">
                    <div className="target-content">
                        <MDBCardText>{this.state.targetKey}</MDBCardText>
                    </div>
                </MDBCard>
                <VirtualKeyboard
                    highlightBgColor={this.state.highlightBgColor}
                    hintKey={this.state.hintKey}
                />
                <MDBCard className="m-3 stats">
                    <MDBBtn gradient="blue" floating tag='a' onClick={()=>{this.reload()}}>
                        <MDBIcon icon='redo-alt' />
                    </MDBBtn>
                    <MDBCardBody className="text-primary">
                        <MDBCardText>
                            Số phím gõ đúng: <b style={{color: this.state.correctKeyCountColor}}>{this.state.correctKeyCount}</b>
                        </MDBCardText>
                        <MDBCardText>
                            Tỉ lệ gõ đúng: <b style={{color: this.state.correctPercentColor}}>{this.state.correctKeyCount >= 1 ? Math.round(this.state.correctKeyCount/this.state.keyCount*100) : 0}%</b>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                <KeyboardEventHandler
                    handleKeys={["alphanumeric","-","=","[","]",";","'",",","."]}
                    handleEventType="keyup"
                    onKeyEvent={(key, e) =>{
                        this.handleKeyUp(key);
                    }}
                />
            </>
        );
    }
}
