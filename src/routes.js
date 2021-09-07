import React from "react";
import { Switch, Route } from "react-router-dom";

import ProfilePage from "./pages/profile-page/profilePage";
import Home from "./pages/home-page/HomePage";
import JobsPage from "./pages/jobs-page/JobsPage";

function Routes({IsLoading, setIsLoading, ErrText, setErrText}) {

  return (
		<Switch>
			<Route
				path='/profile'
				exact
        render={
          () => <ProfilePage 
          IsLoading={IsLoading}
          setIsLoading={setIsLoading}
          ErrText={ErrText}
          setErrText={setErrText}
          />
        }
        />
			<Route
				path='/jobs'
				exact
        render={
          () => <JobsPage 
          IsLoading={IsLoading}
          setIsLoading={setIsLoading}
          ErrText={ErrText}
          setErrText={setErrText}
          />
        }
			/>
			<Route path='/' exact component={Home} />
		</Switch>
	);
}

export default Routes
