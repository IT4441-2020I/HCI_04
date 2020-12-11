import React from 'react';
import VirtualKeyboard from "../components/virtualKeyboard";
import '../../css/study.css'
import {MDBBtn, MDBCard, MDBCardText, MDBIcon} from "mdbreact";

export default class SentenceLearn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            targetSentence: "",
            inputVal: "",
            targetSentenceColor: ""
        }
    }

    componentDidMount() {
        this.generateSentence();
    }

    generateSentence = ()=>{
        let nextKey = Math.floor(Math.random() * 10 + 1);
        switch (nextKey){
            case 1:
                this.setState({
                    targetSentence: "Nước Việt Nam là một, dân tộc Việt Nam là một"
                })
                break;
            case 2:
                this.setState({
                    targetSentence: "Các vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước"
                })
                break;
            case 3:
                this.setState({
                    targetSentence: "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam"
                })
                break;
            case 4:
                this.setState({
                    targetSentence: "Trăm năm trong cõi người ta Chữ Tài, chữ Mệnh khéo là ghét nhau"
                })
                break;
            case 5:
                this.setState({
                    targetSentence: "Có làm thì mới có ăn"
                })
                break;
            case 6:
                this.setState({
                    targetSentence: "Trẻ em như búp trên cành, biết ăn ngủ, biết học hành là ngoan"
                })
                break;
            case 7:
                this.setState({
                    targetSentence: "Chính lòng yêu nước, chứ không phải lý tưởng cộng sản, là nguồn cảm hứng cho tôi"
                })
                break;
            case 8:
                this.setState({
                    targetSentence: "Cá không ăn muối cá ươn, con cãi cha mẹ trăm đường con hư"
                })
                break;
            case 9:
                this.setState({
                    targetSentence: "Công cha như núi Thái Sơn, nghĩa mẹ như nước trong nguồn chảy ra"
                })
                break;
            case 10:
                this.setState({
                    targetSentence: "Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao"
                })
                break;
            default:
                break;
        }
    }

    reload = ()=>{
        this.generateSentence();
        this.setState({
            inputVal: "",
            targetSentenceColor: ""
        })
    }

    onInputChange = (e)=>{
        this.setState({ inputVal: e.target.value });
    }

    keydownHandler = (e)=>{
        if(e.keyCode === 13){
            if(e.target.value === this.state.targetSentence){
                this.setState({targetSentenceColor: "#00BB00"});
                setTimeout(()=>{
                    this.reload();
                }, 200);
            }
            else{
                this.setState({targetSentenceColor: "#FF0000"});
                setTimeout(()=>{
                    this.setState({targetSentenceColor: ""});
                }, 200);
            }
        }
    }

    render(){
        return (
            <>
                <MDBCard color="mdb-color" text="white" className="text-center card-body target">
                    <div className="target-content">
                        <MDBCardText style={{color: this.state.targetSentenceColor}}>{this.state.targetSentence}</MDBCardText>
                    </div>
                </MDBCard>
                <input
                    autoComplete="off"
                    className="form-control form-control-lg study-input"
                    value={this.state.inputVal}
                    onChange={this.onInputChange}
                    onKeyDown={this.keydownHandler}
                />
                <VirtualKeyboard
                    hintKey=" "
                />
                <div className="stats">
                    <MDBBtn gradient="blue" floating tag='a' onClick={()=>{this.reload()}}>
                        <MDBIcon icon='redo-alt' />
                    </MDBBtn>
                </div>
            </>
        );
    }
}
