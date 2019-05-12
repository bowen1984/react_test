import React from "react";

import Header from "components/header";
import {GlobalStyle} from "components/theme";
import Home from "views/home";



// Dati pagina
import MenuItems from "data/menu";

class Page extends React.Component{

    render(){
        return (
            <React.Fragment>
                <GlobalStyle />
                <Header menu={MenuItems}/>
                <Home />
            </React.Fragment>
        );
    }
}

export default Page;