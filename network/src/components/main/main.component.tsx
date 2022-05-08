 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AboutComponent } from '../about';
import { ContactInfoComponent } from '../contact';
import { HomeComponent } from '../home';
import { PortfolioComponent } from '../portfolio';
import { ResumeComponent } from '../resume';
import { ServicesSectionComponent } from '../services';
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

                <Route path ="/about" exact >
                    <>
                        <SidePanelSection />
                        <main id="main">
                            <AboutComponent />   
                        </main> 
                    </>
                </Route>

                <Route path ="/resume" exact >
                    <>
                        <SidePanelSection />
                        <main id="main">
                            <ResumeComponent /> 
                        </main> 
                    </> 
                </Route>

                <Route path ="/portfolio" exact >
                    <>
                        <SidePanelSection />
                        <main id="main">
                            <PortfolioComponent /> 
                        </main> 
                    </>
                </Route>

                <Route path ="/services" exact >
                    <>
                        <SidePanelSection />
                        <main id="main">
                            <ServicesSectionComponent/> 
                        </main> 
                    </>  
                </Route>

                <Route path ="/contact" exact >
                    <>
                        <SidePanelSection />
                        <main id="main">
                            <ContactInfoComponent /> 
                        </main> 
                    </>
                </Route>

            </Switch>   
        </Router>
    );
}

export default MainComponent;