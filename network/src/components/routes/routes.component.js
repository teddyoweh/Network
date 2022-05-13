<<<<<<< HEAD:src/components/main/main.component.tsx
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
=======
 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HomeComponent } from '../home';

const RouteComponent = () => {
    return (
        <Router> 
            <Switch> 
                <Route path ="/" exact >
                    <>
                        
                        <main id="main">
                            <HomeComponent />      
                        </main>
                        
                    </>
                </Route>
  

            </Switch>   
        </Router>
    );
}

export default RouteComponent;
>>>>>>> 17a1ede4728bf55474d7034742c4ca7b47ab771f:network/src/components/routes/routes.component.js
