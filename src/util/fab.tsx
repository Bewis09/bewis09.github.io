import React from "react";
import { IconButtonProp } from "../props";

class Fab extends React.Component<IconButtonProp> {
    render() {
        return <div onClick={e=>{
            this.props.action()
        }} className={"fab "+this.props.className}><span className="material-symbols-outlined fab_icon">
        {this.props.icon}
    </span></div>;
    }
}

export default Fab;
