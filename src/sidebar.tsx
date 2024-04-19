import React from "react";
import Tabs from "./tabs";
import Top, { openCloseMenu } from "./top";
import Fab from "./util/fab";

class Bottom extends React.Component {
    render() {
        return <div id="sidebar_main" style={{display:"none"}}><div className='tabs' id="tabs"><Top>
        </Top>{Tabs()}</div><Fab icon="menu" action={()=>{
            openCloseMenu()
        }} className="open_menu_fab"></Fab></div>;
    }
}

export default Bottom;
