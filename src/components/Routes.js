import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
