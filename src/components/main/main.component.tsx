import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <>
            <main id="main">
            </main>
          </>
        </Route>
      </Switch>
    </Router>
  );
};

export default MainComponent;
