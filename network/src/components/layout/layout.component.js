import { FooterComponent } from "../footer";
 
import {BannerComponent } from "../banner";
import { RouteComponent} from "../routes";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HomeComponent } from "../home";
import './index.css';
const LayoutCompnent = () => {
    //TODO: Fix move side panels, footer outisde and only route mainCmponent
    return(
        <>
        <RouteComponent/>
        <FooterComponent /> 
        </>
    );
}

export default LayoutCompnent;