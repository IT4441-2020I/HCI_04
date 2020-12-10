import React, { Component } from 'react';
import '../App.css';
import SideNavigation from './SideNavigation';
import TopNavigation from './TopNavigation';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      windowWidth: 0,
      currentPage: '',
      sideNavToggled: false,
      breakWidth: 1400
    };
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.assessLocation(this.props.location.pathname);
    }
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    this.assessLocation(this.props.location.pathname);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    });
  };

  toggleSideNav = () => {
    if (this.state.windowWidth < this.state.breakWidth) {
      this.setState({
        sideNavToggled: !this.state.sideNavToggled
      });
    }
  };

  assessLocation = location => {
    let locationString;
    switch (location) {
      // Dashboards:
      case '/dashboards/v1':
        locationString = 'Dashboard v.1';
        break;
      case '/dashboards/v2':
        locationString = 'Dashboard v.2';
        break;
      case '/dashboards/v3':
        locationString = 'Dashboard v.3';
        break;
      case '/dashboards/v4':
        locationString = 'Dashboard v.4';
        break;
      case '/dashboards/v5':
        locationString = 'Dashboard v.5';
        break;
      case '/dashboards/v6':
        locationString = 'Dashboard v.6';
        break;

      // Profiles
      case '/profile/v1':
        locationString = 'Profile v.1';
        break;
      case '/profile/v2':
        locationString = 'Profile v.2';
        break;
      case '/profile/extended':
        locationString = 'Extended profile page';
        break;

      // CSS
      case '/css/animations':
        locationString = 'Animations';
        break;
      case '/css/grid':
        locationString = 'Grid system';
        break;
      case '/css/utilities':
        locationString = 'Utilities & helpers';
        break;
      case '/css/typography':
        locationString = 'Typography';
        break;
      case '/css/colors':
        locationString = 'Colors';
        break;
      case '/css/shadows':
        locationString = 'Shadows';
        break;
      case '/css/code':
        locationString = 'Code';
        break;
      case '/css/icons':
        locationString = 'Icons';
        break;
      case '/css/images':
        locationString = 'Images';
        break;
      case '/css/masks':
        locationString = 'Masks';
        break;
      case '/css/hover':
        locationString = 'Hover';
        break;
      case '/css/media':
        locationString = 'Media';
        break;

      // Components
      case '/components/buttons':
        locationString = 'Buttons';
        break;
      case '/components/cards':
        locationString = 'Cards';
        break;
      case '/components/list':
        locationString = 'List group';
        break;
      case '/components/panels':
        locationString = 'Panels';
        break;
      case '/components/progress':
        locationString = 'Progress bars';
        break;
      case '/components/tooltips':
        locationString = 'Tooltips';
        break;
      case '/components/popovers':
        locationString = 'Popovers';
        break;
      case '/components/tabs':
        locationString = 'Tabs & pills';
        break;
      case '/components/tags':
        locationString = 'Tags, labels & badges';
        break;
      case '/components/date':
        locationString = 'Date picker';
        break;
      case '/components/time':
        locationString = 'Time picker';
        break;
      case '/components/stepper':
        locationString = 'Stepper';
        break;
      case '/components/pagination':
        locationString = 'Pagination';
        break;
      case '/components/collapse':
        locationString = 'Collapse';
        break;

      // Forms
      case '/forms/basic':
        locationString = 'Inputs';
        break;
      case '/forms/validation':
        locationString = 'Validation';
        break;
      case '/forms/extended':
        locationString = 'Forms';
        break;

      // Tables
      case '/tables/basic':
        locationString = 'Tables basic';
        break;
      case '/tables/extended':
        locationString = 'Tables extended';
        break;
      case '/tables/datatable':
        locationString = 'Datatable';
        break;

      // Maps
      case '/maps/google':
        locationString = 'Google maps';
        break;
      case '/maps/full':
        locationString = 'Full height map';
        break;
      case '/maps/vector':
        locationString = 'Vector world map';
        break;

      // others
      case '/alerts':
        locationString = 'Alerts';
        break;
      case '/modals':
        locationString = 'Modals';
        break;
      case '/charts':
        locationString = 'Charts';
        break;
      case '/sections':
        locationString = 'Sections';
        break;
      case '/calendar':
        locationString = 'Full page calendar';
        break;

      //Tốc ký
      case '/':
        locationString = 'Trang chủ';
        break;
      case '/trang-chu':
        locationString = 'Trang chủ';
        break;
      case '/tai-lieu':
        locationString = 'Tài liệu';
        break;
      case '/hoc-go/hoc-go-phim':
        locationString = 'Học gõ phím';
        break;
      case '/hoc-go/hoc-go-am':
        locationString = 'Học gõ âm';
        break;
      case '/hoc-go/hoc-go-tu':
        locationString = 'Học gõ từ';
        break;
      case '/hoc-go/hoc-go-cau':
        locationString = 'Học gõ câu';
        break;
      case '/kiem-tra':
        locationString = 'Kiểm tra';
        break;

      default:
    }
    this.setState({
      currentPage: locationString
    });
  };

  render() {
    const dynamicLeftPadding = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? '240px' : '0'
    };

    return (
      <div className='app'>
        <div className='cyan-skin'>
          <SideNavigation
            breakWidth={this.state.breakWidth}
            style={{ transition: 'all .3s' }}
            triggerOpening={this.state.sideNavToggled}
            onLinkClick={() => this.toggleSideNav()}
          />
        </div>
        <div className='flexible-content cyan-skin'>
          <TopNavigation
            toggle={this.state.windowWidth < this.state.breakWidth}
            onSideNavToggleClick={this.toggleSideNav}
            routeName={this.state.currentPage}
            className='cyan-skin'
          />
          <main style={{ ...dynamicLeftPadding, margin: '8rem 6% 6rem' }}>
            <Routes onChange={() => this.assessLocation()} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
