 
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