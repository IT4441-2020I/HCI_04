import React from 'react';
import VirtualKeyboard from "../components/virtualKeyboard";
import '../../css/study.css'
import {MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBIcon} from "mdbreact";
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default class SyllableLearn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hintKey: "q",
            handleKey: [""],
            targetSyllable: "",
            correctKeyCount: 0,
            keyCount: 0,
            correctKeyCountColor: "",
            correctPercentColor: ""
        }
    }

    componentDidMount() {
        this.generateSyllable();
    }

    generateSyllable = ()=>{
        let nextKey = Math.floor(Math.random() * 20 + 1);
        switch (nextKey){
            case 1:
                this.setState({
                    hintKey: "q",
                    handleKey: ["q"],
                    targetSyllable: "s.."
                })
                break;
            case 2:
                this.setState({
                    hintKey: "w",
                    handleKey: ["w"],
                    targetSyllable: "c.."
                })
                break;
            case 3:
                this.setState({
                    hintKey: "a d",
                    handleKey: ["a", "d"],
                    targetSyllable: "th.."
                })
                break;
            case 4:
                this.setState({
                    hintKey: "a e",
                    handleKey: ["a", "e"],
                    targetSyllable: "tr.."
                })
                break;
            case 5:
                this.setState({
                    hintKey: "w s",
                    handleKey: ["w", "s"],
                    targetSyllable: "gh.."
                })
                break;
            case 6:
                this.setState({
                    hintKey: "q d",
                    handleKey: ["q", "d"],
                    targetSyllable: "gi.."
                })
                break;
            case 7:
                this.setState({
                    hintKey: "a s",
                    handleKey: ["a", "s"],
                    targetSyllable: "đ.."
                })
                break;
            case 8:
                this.setState({
                    hintKey: "j n",
                    handleKey: ["j", "n"],
                    targetSyllable: "..iê.."
                })
                break;
            case 9:
                this.setState({
                    hintKey: "q s d",
                    handleKey: ["q", "s", "d"],
                    targetSyllable: "q.."
                })
                break;
            case 10:
                this.setState({
                    hintKey: "c v",
                    handleKey: ["c", "v"],
                    targetSyllable: "..ua.."
                })
                break;
            case 11:
                this.setState({
                    hintKey: "u j",
                    handleKey: ["u", "j"],
                    targetSyllable: "..i.."
                })
                break;
            case 12:
                this.setState({
                    hintKey: "c i",
                    handleKey: ["c", "i"],
                    targetSyllable: "..ư.."
                })
                break;
            case 13:
                this.setState({
                    hintKey: "n i",
                    handleKey: ["n", "i"],
                    targetSyllable: "..ưa.."
                })
                break;
            case 14:
                this.setState({
                    hintKey: "c k",
                    handleKey: ["c", "k"],
                    targetSyllable: "..uy.."
                })
                break;
            case 15:
                this.setState({
                    hintKey: "n k",
                    handleKey: ["n", "k"],
                    targetSyllable: "..uya.."
                })
                break;
            case 16:
                this.setState({
                    hintKey: "[ '",
                    handleKey: ["[", "'"],
                    targetSyllable: "..p"
                })
                break;
            case 17:
                this.setState({
                    hintKey: "; '",
                    handleKey: [";", "'"],
                    targetSyllable: "..ch"
                })
                break;
            case 18:
                this.setState({
                    hintKey: ";",
                    handleKey: [";"],
                    targetSyllable: "..ng"
                })
                break;
            case 19:
                this.setState({
                    hintKey: "'",
                    handleKey: ["'"],
                    targetSyllable: "..nh"
                })
                break;
            case 20:
                this.setState({
                    hintKey: "[",
                    handleKey: ["["],
                    targetSyllable: "..m"
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
            this.generateSyllable();
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
        this.generateSyllable();
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
                        <MDBCardText>{this.state.targetSyllable}</MDBCardText>
                    </div>
                </MDBCard>
                <VirtualKeyboard
                    hintKey={this.state.hintKey}
                />
                <MDBCard className="m-3 stats">
                    <MDBBtn gradient="blue" floating tag='a' onClick={()=>{this.reload()}}>
                        <MDBIcon icon='redo-alt' />
                    </MDBBtn>
                    <MDBCardBody className="text-primary">
                        <MDBCardText>
                            Số âm gõ đúng: <b style={{color: this.state.correctKeyCountColor}}>{this.state.correctKeyCount}</b>
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
