import React from "react";
import { Switch, Route } from "react-router-dom";

import ProfilePage from "./pages/profile-page/profilePage";
import Home from "./pages/home/Home";

function Routes() {
  return (
      <Switch>
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/" exact component={Home} />
      </Switch>
    )
}

export default Routes
