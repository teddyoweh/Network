 
import { MainComponent } from "../main";
import { SidePanelSection } from "../sidepanel";
 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HomeComponent } from "../home";


const LayoutCompnent = () => {
   
    return(
        <>
        <MainComponent />
 
        </>
    );
}

export default LayoutCompnent;