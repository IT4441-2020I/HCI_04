import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBIcon,
    MDBModal,
    MDBModalBody, MDBModalFooter,
    MDBModalHeader
} from "mdbreact";
import '../../css/practice.css'
import ReactDiffViewer from 'react-diff-viewer';

export default class Practice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lastRd: "",
            targetParagraph: "",
            inputVal: "",
            modal: false,
            mm: 0,
            ss: 0,
            time: 0
        }
    }

    componentDidMount() {
        this.generateParagraph();
        this.setTimer();
    }

    generateParagraph = ()=>{
        let nextKey = Math.floor(Math.random() * 3 + 1);
        while(nextKey === this.state.lastRd){
            nextKey = Math.floor(Math.random() * 3 + 1);
        }
        switch (nextKey){
            case 1:
                this.setState({
                    lastRd: nextKey,
                    targetParagraph: "Lão Hạc là một người nông dân chất phác, hiền lành. " +
                        "Vợ lão mất sớm, lão còn có một người con trai nhưng vì quá nghèo nên không thể lấy vợ cho con. " +
                        "Sau này, người con gái mà con trai lão yêu thương hết mực ấy lại lấy con trai một ông phó lí, nhà có của. " +
                        "Hắn vì phẫn chí đã rời bỏ quê hương để đến đồn điền cao su làm ăn kiếm tiền. " +
                        "Lão Hạc luôn trăn trở, suy nghĩ về tương lai của đứa con. " +
                        "Lão sống bằng nghề làm vườn, mảnh vườn mà vợ lão đã mất bao công sức để mua về và để lại cho con trai lão."
                })
                break;
            case 2:
                this.setState({
                    lastRd: nextKey,
                    targetParagraph: "Ở làng Vũ Đại. " +
                        "Một sáng tinh sương, một anh thả ống lươn nhặt được đứa bé mới đẻ xám ngắt đùm trong cái váy đụp vứt ở lò gạch cũ. " +
                        "Anh ta rước lấy đem về cho người đàn bà góa mù, bà này bán lại cho bác phó cối. " +
                        "Khi bác phó cối chết, hắn bơ vơ, mãi năm 20 tuổi hắn làm canh điền cho Bá Kiến. " +
                        "Vợ ba Bá Kiến bắt Chí bóp chân và xem Chí như một vật lợi dụng. " +
                        "Bá Kiến biết được và thế là Chí bị người ta giải huyện... " +
                        "Đi tù bảy, tám năm sau hắn trở lại làng, mặt mày trông khác hẳn, trông gớm chết trông như một thằng săng đá! " +
                        "Về hôm trước thì hôm sau hắn đã ngồi ở chợ uống rượu với ăn thịt chó từ trưa đến xế chiều, rồi xách vỏ chai đến thẳng nhà Bá Kiến gây sự. " +
                        "Xô xát với Lý Cường, hắn đập vỏ chai, rạch mặt kêu trời ăn vạ. " +
                        "Sau cái vụ Năm Thọ, Binh chức, cụ Bá róc đời xử nhũn với Chí Phèo. " +
                        "Cụ mời hắn vào nhà, giết gà đãi rượu, lúc hắn ra về còn đãi một đống bạc uống thuốc."
                })
                break;
            case 3:
                this.setState({
                    lastRd: nextKey,
                    targetParagraph: "Hắn vừa đi vừa chửi. " +
                        "Bao giờ cũng thế, cứ rượu xong là hắn chửi. " +
                        "Bắt đầu hắn chửi trời. Có hề gì? Trời có của riêng nhà nào? " +
                        "Rồi hắn chửi đời. Thế cũng chẳng sao: đời là tất cả nhưng chẳng là ai. " +
                        "Tức mình, hắn chửi ngay tất cả làng Vũ Đại. Nhưng cả làng Vũ Đại ai cũng nhủ: “Chắc nó trừ mình ra!”. " +
                        "Không ai lên tiếng cả. Tức thật! ờ! Thế này thì tức thật! Tức chết đi được mất! " +
                        "Đã thế, hắn phải chửi cha đứa nào không chửi nhau với hắn. Nhưng cũng không ai ra điều. " +
                        "Mẹ kiếp! Thế có phí rượu không? Thế thì có khổ hắn không? Không biết đứa chết mẹ nào lại đẻ ra thân hắn cho hắn khổ đến nông nỗi này? " +
                        "A ha! Phải đấy hắn cứ thế mà chửi, hắn cứ chửi đứa chết mẹ nào đẻ ra thân hắn, đẻ ra cái thằng Chí Phèo! " +
                        "Hắn nghiến răng vào mà chửi cái đứa đã đẻ ra Chí Phèo. Nhưng mà biết đứa nào đã đẻ ra Chí Phèo? Có mà trời biết! " +
                        "Hắn không biết, cả làng Vũ Đại cũng không ai biết…"
                })
                break;
            default:
                break;
        }
    }

    setTimer = ()=>{
        this.itv = setInterval(()=>{
            if(this.state.ss < 60){
                this.setState({
                    time: this.state.time + 1,
                    ss: this.state.ss + 1
                })
            }
            else{
                this.setState({
                    time: this.state.time + 1,
                    ss: 0,
                    mm: this.state.mm + 1
                })
            }
        }, 1000)
    }

    reload = ()=>{
        this.generateParagraph();
        this.setState({
            inputVal: "",
            modal: false,
            mm: 0,
            ss: 0,
            time: 0
        })
        clearInterval(this.itv);
        this.setTimer();
    }

    toggle = () => {
        this.setState({
            modal: true
        });
        clearInterval(this.itv);
    }

    onInputChange = (e)=>{
        this.setState({ inputVal: e.target.value });
    }

    checkResult = ()=>{
        if(this.state.inputVal === this.state.targetParagraph){
            return(
                <div style={{color: "#00BB00", textAlign: "center"}}>
                    Bạn đã hoàn thành xuất sắc bài thi trong {this.state.mm} phút {this.state.ss} giây!
                </div>
            )
        }
        else{
            return(
                <>
                    <p style={{textAlign: "center"}}>
                        Bạn đã hoàn thành bài thi trong {this.state.mm} phút {this.state.ss} giây!
                    </p>
                    <ReactDiffViewer
                        leftTitle="Đoạn văn cần gõ"
                        oldValue={this.state.targetParagraph}
                        rightTitle="Đoạn văn đã gõ"
                        newValue={this.state.inputVal}
                        splitView={true}
                        compareMethod="diffWords"
                    />
                </>
            )
        }
    }

    render() {
        return(
            <>
                <MDBCard color="" className="practice-target">
                    <MDBCardHeader style={{backgroundColor: "#F7F7F7"}}>
                        <div className="practice-header">
                            <label style={{flex: 1}}>Gõ đoạn văn sau:</label>
                            <b>{this.state.mm.toString().padStart(2, "0")}:{this.state.ss.toString().padStart(2, "0")}</b>
                        </div>
                    </MDBCardHeader>
                    <MDBCardBody className="practice-target-content light">
                        <label>{this.state.targetParagraph}</label>
                    </MDBCardBody>
                </MDBCard>
                <textarea
                    autoComplete="off"
                    className="form-control form-control-lg practice-input"
                    value={this.state.inputVal}
                    onChange={this.onInputChange}
                    rows={8}
                />
                <MDBBtn color="blue" onClick={this.toggle} rounded>
                    Nộp bài
                </MDBBtn>
                <div className="stats">
                    <MDBBtn gradient="blue" floating tag='a' onClick={this.reload}>
                        <MDBIcon icon='redo-alt' />
                    </MDBBtn>
                </div>

                <MDBModal size="lg" isOpen={this.state.modal} toggle={this.toggle} centered>
                    <MDBModalHeader toggle={this.toggle}>
                        <div style={{textAlign: "center"}}>Kết quả</div>
                    </MDBModalHeader>
                    <MDBModalBody>
                        {this.checkResult()}
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="success" onClick={this.reload} rounded>
                            Kiểm tra lại
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </>
        );
    }
}
