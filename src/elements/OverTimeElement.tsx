import React, { useState } from "react";
import "./over_time_element.scss"
import { OverTimeElementProp } from "../props";
import Empty from "../util/empty";

export const OverTimeElement: React.FC<OverTimeElementProp> = (props) => {
    const elements = []

    const [page,setPage] = useState<number>(0)

    for (let index = 1; index < props.texts[page].length; index+=2) {
        const element = props.texts[page][index];
        const element2 = props.texts[page][index+1];
        elements.push(<><Empty height={10}/><div className="over_time_box"><b>{element}</b>: <div className="description_time_box">- {element2}</div></div></>)
    }

    return (
        <div className="outer_box">
            {props.texts[page][0]}
            {elements}
            <div className="right_flex">
                <div className="next" onClick={()=>{setPage(Math.min(page+1,props.texts.length-1))}}>Nächste Jahre</div>
            </div>
        </div>
    )
}