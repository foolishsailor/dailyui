import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWithTitle from "./routeWithTitle";
import { Defaults } from "../utils/globalStyles";
import Main from "./main";
import projectsComplete from "../utils/projectsComplete";

const renderLoader = () => <p>Loading</p>;

const Routes = projectsComplete.map((item, i) => {
  const Component = () => {
    const LazyComponent = lazy(() => import(`../routes/dailyUI/${item}`));
    return (
      <Suspense fallback={renderLoader()}>
        <LazyComponent />
      </Suspense>
    );
  };

  return (
    <RouteWithTitle
      key={i}
      exact
      component={Component}
      path={`/dailyUI/${item}`}
      title={`Daily UI #${item}`}
    />
  );
});

const App = () => {
  return (
    <Router>
      <Defaults />
      <Main>
        <Switch>{Routes}</Switch>
      </Main>
    </Router>
  );
};

export default App;
