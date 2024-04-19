import React from "react";
import { HeightProp } from "../props";

export default class Empty extends React.Component<HeightProp> {
    render() {
        return (
            <div style={{height:this.props.height?this.props.height:20}}>

            </div>
        )
    }
}