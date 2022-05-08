import { FooterComponent } from "../footer";
import { MainComponent } from "../main";
import { SidePanelSection } from "../sidepanel";
 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HomeComponent } from "../home";
import { AboutComponent } from "../about";
import { ResumeComponent } from "../resume";
import { PortfolioComponent } from "../portfolio";
import { ServicesSectionComponent } from "../services";
import { ContactInfoComponent } from "../contact";

const LayoutCompnent = () => {
    //TODO: Fix move side panels, footer outisde and only route mainCmponent
    return(
        <>
        <MainComponent />

        <FooterComponent /> 
        </>
    );
}

export default LayoutCompnent;