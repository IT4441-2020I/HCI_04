import React from 'react';
import VirtualKeyboard from "../components/virtualKeyboard";
import '../css/study.css'
import {MDBBtn, MDBCard, MDBCardText, MDBIcon} from "mdbreact";
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default class WordLearn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            targetWord: "",
            inputVal: "",
            targetWordColor: ""
        }
    }

    componentDidMount() {
        this.generateWord();
    }

    generateWord = ()=>{
        let nextKey = Math.floor(Math.random() * 20 + 1);
        switch (nextKey){
            case 1:
                this.setState({
                    targetWord: "nhà"
                })
                break;
            case 2:
                this.setState({
                    targetWord: "chả"
                })
                break;
            case 3:
                this.setState({
                    targetWord: "đi"
                })
                break;
            case 4:
                this.setState({
                    targetWord: "chương"
                })
                break;
            case 5:
                this.setState({
                    targetWord: "lá"
                })
                break;
            case 6:
                this.setState({
                    targetWord: "nhì"
                })
                break;
            case 7:
                this.setState({
                    targetWord: "hoa"
                })
                break;
            case 8:
                this.setState({
                    targetWord: "con"
                })
                break;
            case 9:
                this.setState({
                    targetWord: "lươn"
                })
                break;
            case 10:
                this.setState({
                    targetWord: "thù"
                })
                break;
            case 11:
                this.setState({
                    targetWord: "chó"
                })
                break;
            case 12:
                this.setState({
                    targetWord: "lọ"
                })
                break;
            case 13:
                this.setState({
                    targetWord: "bông"
                })
                break;
            case 14:
                this.setState({
                    targetWord: "huy"
                })
                break;
            case 15:
                this.setState({
                    targetWord: "khuya"
                })
                break;
            case 16:
                this.setState({
                    targetWord: "nguyên"
                })
                break;
            case 17:
                this.setState({
                    targetWord: "nhanh"
                })
                break;
            case 18:
                this.setState({
                    targetWord: "ngoan"
                })
                break;
            case 19:
                this.setState({
                    targetWord: "sổ"
                })
                break;
            case 20:
                this.setState({
                    targetWord: "trăng"
                })
                break;
            default:
                break;
        }
    }

    reload = ()=>{
        this.generateWord();
        this.setState({
            inputVal: "",
            targetWordColor: ""
        })
    }

    onInputChange = (e)=>{
        this.setState({ inputVal: e.target.value });
    }

    keydownHandler = (e)=>{
        if(e.keyCode === 13){
            if(e.target.value === this.state.targetWord){
                this.setState({targetWordColor: "#00BB00"});
                setTimeout(()=>{
                    this.reload();
                }, 200);
            }
            else{
                this.setState({targetWordColor: "#FF0000"});
                setTimeout(()=>{
                    this.setState({targetWordColor: ""});
                }, 200);
            }
        }
    }

    render(){
        return (
            <>
                <MDBCard color="mdb-color" text="white" className="text-center card-body target">
                    <div className="target-content">
                        <MDBCardText style={{color: this.state.targetWordColor}}>{this.state.targetWord}</MDBCardText>
                    </div>
                </MDBCard>
                <input
                    type="text"
                    autocomplete="off"
                    className="form-control form-control-lg"
                    value={this.state.inputVal}
                    onChange={this.onInputChange}
                    onKeyDown={this.keydownHandler}
                />
                <VirtualKeyboard
                    highlightBgColor={this.state.highlightBgColor}
                    hintKey=" "
                />
                <MDBBtn className="stats" gradient="blue" floating tag='a' onClick={()=>{this.reload()}}>
                    <MDBIcon icon='redo-alt' />
                </MDBBtn>
                <KeyboardEventHandler
                    handleKeys={["enter"]}
                    handleEventType="keyup"
                    onKeyEvent={(key, e) =>{
                        console.log("enter");
                    }}
                />
            </>
        );
    }
}
