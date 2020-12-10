import React from 'react';
import {
  MDBSideNavLink,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBIcon
} from 'mdbreact';

class SideNavigation extends React.Component {
  // render MDBSideNav Link
  rSNL(to, text) {
    return (
      <MDBSideNavLink to={to} onClick={this.props.onLinkClick}>
        {text}
      </MDBSideNavLink>
    );
  }

  render() {
    const { onLinkClick } = this.props;
    return (
      <div className='cyan-skin'>
        <MDBSideNav
          logo='/img/logo.png'
          bg='/img/sidenav4.jpg'
          mask='strong'
          fixed
          breakWidth={this.props.breakWidth}
          triggerOpening={this.props.triggerOpening}
          style={{ transition: 'padding-left .3s' }}
        >
          <MDBSideNavNav>
            <MDBSideNavLink topLevel to='/trang-chu' onClick={onLinkClick}>
              <MDBIcon icon="home mr-2" />
              Trang chủ
            </MDBSideNavLink>

            <MDBSideNavLink topLevel to='/tai-lieu' onClick={onLinkClick}>
              <MDBIcon icon="file-alt mr-2" />
              Tài liệu
            </MDBSideNavLink>

            <MDBSideNavCat name='Học gõ' id='learn-cat' icon="book-reader">
              {this.rSNL('/hoc-go/hoc-go-phim', 'Học gõ phím')}
              {this.rSNL('/hoc-go/hoc-go-am', 'Học gõ âm')}
              {this.rSNL('/hoc-go/hoc-go-tu', 'Học gõ từ')}
              {this.rSNL('/hoc-go/hoc-go-cau', 'Học gõ câu')}
            </MDBSideNavCat>

            <MDBSideNavLink topLevel to='/kiem-tra' onClick={onLinkClick}>
              <MDBIcon icon="pencil-ruler mr-2" />
              Kiểm tra
            </MDBSideNavLink>
          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }
}

export default SideNavigation;
