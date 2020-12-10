import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DV1 from './dashboard/v1';
import DV2 from './dashboard/v2';
import DV3 from './dashboard/v3';
import DV4 from './dashboard/v4';
import DV5 from './dashboard/v5';
import DV6 from './dashboard/v6';

import Customers from './pages/Customers';
import Invoice from './pages/Invoice';
import Chat from './pages/Chat';
import Support from './pages/Support';
import PageCreator from './pages/PageCreator.js';

import PV1 from './profile/v1';
import PV2 from './profile/v2';
import PExtended from './profile/extended';

import Google from './maps/google';
import MFull from './maps/full';
import Vector from './maps/vector';

import TBasic from './tables/basic';
import TExtended from './tables/extended';
import Datatable from './tables/datatable';

import Grid from './css/grid';
import Utilities from './css/utilities';
import Code from './css/code';
import Icons from './css/icons';
import Images from './css/images';
import Typography from './css/typography';
import Colors from './css/colors';
import Shadows from './css/shadows';
import Masks from './css/masks';
import Hover from './css/hover';
import MediaObject from './css/media';
import Animations from './css/animations';

import Buttons from './components/buttons';
import Cards from './components/cards';
import Panels from './components/panels';
import List from './components/list';
import Progress from './components/progress';
import Tabs from './components/tabs';
import Tags from './components/tags';
import DatePicker from './components/datepicker';
import TimePicker from './components/timepicker';
import Popover from './components/popover';
import Tooltip from './components/tooltips';
import Stepper from './components/stepper';
import Pagination from './components/pagination';
import Collapse from './components/collapse';

import FBasic from './forms/basic';
import FExtended from './forms/extended';
import FValidation from './forms/validation';

import Charts from './others/charts';
import Alerts from './others/alerts';
import Modals from './others/modals';
import Sections from './others/sections';
import Calendar from './others/calendar';

import Home from "./trang-chu/home";
import KeyLearn from "./hoc-go/keyLearn";
import SyllableLearn from "./hoc-go/syllableLearn";
import WordLearn from "./hoc-go/wordLearn";
import SentenceLearn from "./hoc-go/sentenceLearn";
import Practice from "./luyen-tap/practice";
import Document from "./tai-lieu/document";

const fourtOFour = () => <h1 className="text-center">404</h1>

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/trang-chu' exact component={Home} />
        <Route path='/hoc-go/hoc-go-phim' exact component={KeyLearn} />
        <Route path='/hoc-go/hoc-go-am' exact component={SyllableLearn} />
        <Route path='/hoc-go/hoc-go-tu' exact component={WordLearn} />
        <Route path='/hoc-go/hoc-go-cau' exact component={SentenceLearn} />
        <Route path='/kiem-tra' exact component={Practice} />
        <Route path='/tai-lieu' exact component={Document} />
        <Route component={fourtOFour} />
      </Switch>
    );
  }
}

export default Routes;
