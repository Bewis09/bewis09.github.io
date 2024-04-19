import React from "react";
import { IDProp } from "./props";

export default class ImageView extends React.Component<IDProp> {
    render() {
        return (
            <div className="outer_box image_view_box">
                <img alt="" src={this.props.id} className="image_view" onClick={e=>{
                    const j = document.getElementById('big_img_display') as HTMLImageElement
                    const k = (e.target as HTMLImageElement)

                    document.getElementById("other_than_big")!!.style.filter = "brightness(50%) blur(1px)"
                    document.getElementById("other_than_big")!!.style.backdropFilter = "brightness(50%) blur(1px)"
                    document.getElementById("big")!!.style.display = "block"
                    j!!.style.display = "block"
                    j!!.src = k.src
                }}></img>
            </div>
        )
    }
}