import React from "react";
import { IDProp } from "./props";

export class GoToNextElement extends React.Component<IDProp> {
    render() {
        return (
            <div className="outer_box partial_end" onClick={e=>{
                const d = document.getElementById("__tabs__")
                d?.childNodes.forEach(e => {
                    (e as HTMLElement).style.display = "none"
                })

                document.getElementById(this.props.id)!!.style.display = "block"
            }}>
                Zum Nächsten Teilbereich
            </div>
        )
    }
}