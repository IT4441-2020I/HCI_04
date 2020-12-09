import React from 'react';
import {MDBCol, MDBListGroup, MDBListGroupItem, MDBRow, MDBScrollspyBox, MDBScrollspyText} from "mdbreact"
import '../../css/document.css'

export default class Document extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            sections: []
        };

        this.scrollSpyText = React.createRef();
    }

    componentDidMount() {
        let sections = this.scrollSpyText.current.getElementsByTagName("h4");
        this.setState({ sections });
    }

    handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        const sections = this.state.sections;
        const lastIndex = sections.length - 1;

        for (let i = 0; i < lastIndex; i++) { if ((scrollTop> sections[i].offsetTop - 20) && (scrollTop < sections[i +
        1].offsetTop - 20)) { this.setState({ active: i }); } }; if (scrollTop> sections[lastIndex].offsetTop - 20)
            this.setState({ active: lastIndex });
    }

    render() {
        return (
            <MDBScrollspyBox>
                <MDBRow>
                    <MDBCol md="3">
                        <MDBListGroup>
                            <MDBListGroupItem href="#section1" active={this.state.active===0}>Giới thiệu bàn phím</MDBListGroupItem>
                            <MDBListGroupItem href="#section2" active={this.state.active===1}>Quy tắc gõ âm đầu</MDBListGroupItem>
                            <MDBListGroupItem href="#section3" active={this.state.active===2}>Quy tắc gõ âm chính</MDBListGroupItem>
                            <MDBListGroupItem href="#section4" active={this.state.active===3}>Quy tắc gõ âm cuối</MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                    <MDBCol>
                        <MDBScrollspyText className="doc-scroll" onScroll={this.handleScroll} scrollSpyRef={this.scrollSpyText}>
                            <h4 id="section1"></h4>
                            <img className="document" src="/img/gioi-thieu-ban-phim.png"/>
                            <h4 id="section2"></h4>
                            <img className="document" src="/img/am-dau.png"/>
                            <h4 id="section3"></h4>
                            <img className="document" src="/img/am-chinh.png"/>
                            <h4 id="section4"></h4>
                            <img className="document" src="/img/am-cuoi.png"/>
                        </MDBScrollspyText>
                    </MDBCol>
                </MDBRow>
            </MDBScrollspyBox>
        );
    }
}
