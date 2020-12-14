import React from 'react';
import {MDBCard, MDBCardBody, MDBCollapse, MDBCollapseHeader, MDBContainer, MDBIcon} from "mdbreact";

export default class Faq extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            collapseID: ""
        }
    }

    toggleCollapse = (ID) =>{
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== ID ? ID : ""
        }))
    }

    render() {
        const { collapseID } = this.state;
        return (
            <MDBContainer>
                <MDBContainer className='md-accordion mt-5'>
                    <MDBCard className='mt-3'>
                        <MDBCollapseHeader
                            tagClassName='d-flex justify-content-between'
                            onClick={() => this.toggleCollapse('collapse1')}
                        >
                            Tốc ký là gì?
                            <MDBIcon
                                icon={collapseID === 'collapse1' ? 'angle-up' : 'angle-down'}
                            />
                        </MDBCollapseHeader>
                        <MDBCollapse id='collapse1' isOpen={collapseID}>
                            <MDBCardBody>
                                    Tốc ký hay ghi nhanh, ghi tắt là việc thực hành ghi chép thông
                                tin một cách nhanh chóng nhất thông qua việc ghi vắn tắt các ký
                                tự với những phương pháp tăng tốc độ viết. Tốc ký sẽ giúp tiếp thu
                                kiến thức dễ dàng hơn từ những bài giảng hay phát biểu quá dài dòng.
                            </MDBCardBody>
                        </MDBCollapse>
                    </MDBCard>

                    <MDBCard>
                        <MDBCollapseHeader
                            tagClassName='d-flex justify-content-between'
                            onClick={() => this.toggleCollapse('collapse2')}
                        >
                            Tại sao phải gõ tốc ký?
                            <MDBIcon
                                icon={collapseID === 'collapse2' ? 'angle-up' : 'angle-down'}
                            />
                        </MDBCollapseHeader>
                        <MDBCollapse id='collapse2' isOpen={collapseID}>
                            <MDBCardBody>
                                Gõ tốc ký sẽ giúp cải thiện đáng kể tốc độ gõ văn
                                bản. Rất có ích đối với những người thường xuyên phải
                                đánh máy nhiều.
                            </MDBCardBody>
                        </MDBCollapse>
                    </MDBCard>

                    <MDBCard>
                        <MDBCollapseHeader
                            tagClassName='d-flex justify-content-between'
                            onClick={() => this.toggleCollapse('collapse3')}
                        >
                            Những ai nên học gõ tốc ký?
                            <MDBIcon
                                icon={collapseID === 'collapse3' ? 'angle-up' : 'angle-down'}
                            />
                        </MDBCollapseHeader>
                        <MDBCollapse id='collapse3' isOpen={collapseID}>
                            <MDBCardBody>
                                Không phải ai cũng có nhu cầu học gõ tốc ký.
                                Phương pháp gõ này sẽ phù hợp với một số người
                                như nhà văn, thư ký, nhân viên văn phòng
                                và những người thuộc các ngành nghề yêu cầu phải đánh máy nhiều.
                            </MDBCardBody>
                        </MDBCollapse>
                    </MDBCard>

                    <MDBCard>
                        <MDBCollapseHeader
                            tagClassName='d-flex justify-content-between'
                            onClick={() => this.toggleCollapse('collapse4')}
                        >
                            Học gõ tốc ký có khó không?
                            <MDBIcon
                                icon={collapseID === 'collapse4' ? 'angle-up' : 'angle-down'}
                            />
                        </MDBCollapseHeader>
                        <MDBCollapse id='collapse4' isOpen={collapseID}>
                            <MDBCardBody>
                                Có. Bản thân thằng làm ra phần mềm này cũng không biết gõ tốc ký :((
                            </MDBCardBody>
                        </MDBCollapse>
                    </MDBCard>

                    <MDBCard>
                        <MDBCollapseHeader
                            tagClassName='d-flex justify-content-between'
                            onClick={() => this.toggleCollapse('collapse5')}
                        >
                            Người làm ra phần mềm này có đẹp trai không?
                            <MDBIcon
                                icon={collapseID === 'collapse5' ? 'angle-up' : 'angle-down'}
                            />
                        </MDBCollapseHeader>
                        <MDBCollapse id='collapse5' isOpen={collapseID}>
                            <MDBCardBody>
                                Có :)) Mặc dù câu hỏi không liên quan cho lắm.
                            </MDBCardBody>
                        </MDBCollapse>
                    </MDBCard>

                    <MDBCard>
                        <MDBCollapseHeader
                            tagClassName='d-flex justify-content-between'
                            onClick={() => this.toggleCollapse('collapse6')}
                        >
                            Mất bao lâu để có thể thành thạo được việc gõ tốc ký?
                            <MDBIcon
                                icon={collapseID === 'collapse6' ? 'angle-up' : 'angle-down'}
                            />
                        </MDBCollapseHeader>
                        <MDBCollapse id='collapse6' isOpen={collapseID}>
                            <MDBCardBody>
                                Trung bình 1 người sẽ mất khoảng 3-4 ngày để
                                có thể làm quen và nhớ các phím tốc ký, 2-3 tuần để
                                có thể nhớ được các quy tắc, 1-2 tháng để
                                có thể gõ thành thạo.
                            </MDBCardBody>
                        </MDBCollapse>
                    </MDBCard>
                </MDBContainer>
            </MDBContainer>
        );
    }
}
