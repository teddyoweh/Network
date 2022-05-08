import { FooterComponent } from "../footer";
 
 
 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HomeComponent } from "../home";
 
const LayoutCompnent = () => {
    //TODO: Fix move side panels, footer outisde and only route mainCmponent
    return(
        <>
        <HomeComponent />

        <FooterComponent /> 
        </>
    );
}

export default LayoutCompnent;