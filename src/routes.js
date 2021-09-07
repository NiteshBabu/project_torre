import React from "react";
import { Switch, Route } from "react-router-dom";

import ProfilePage from "./pages/profile-page/profilePage";
import Home from "./pages/home-page/HomePage";
import JobsPage from "./pages/jobs-page/JobsPage";

function Routes() {
  return (
      <Switch>
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/jobs" exact component={JobsPage} />
        <Route path="/" exact component={Home} />
      </Switch>
    )
}

export default Routes
