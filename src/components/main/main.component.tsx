 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
 
import { HomeComponent } from '../home';

import { SidePanelSection } from '../sidepanel';
 
const MainComponent = () => {
    return (
        <Router> 
            <Switch> 
                <Route path ="/" exact >
                    <>
                        <SidePanelSection />
                        <main id="main">
                            <HomeComponent />      
                        </main>
                        
                    </>
                </Route>

                 

            </Switch>   
        </Router>
    );
}

export default MainComponent;