import React from "react";
import { SimpleChildrenProp } from "../props";

export class H extends React.Component<SimpleChildrenProp> {
    render() {
        return (
          <span style={{color:"#FFAAAA"}}>
            {this.props.children}
          </span>
        );
      }
}