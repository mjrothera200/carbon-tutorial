import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import Industry4Page from './content/Industry4Page';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/industry4.0" component={Industry4Page} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
