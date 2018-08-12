import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectPage from '../ProjectPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ProjectPage} />
      </Switch>
    </div>
  );
}
