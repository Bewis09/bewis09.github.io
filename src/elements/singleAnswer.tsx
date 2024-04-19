import React from "react";
import "./single_answer.scss"
import { SingleAnswerQuizProp } from "../props";
import { LeftText, SizedText } from "../text";

export class SingleAnswerNumberQuiz extends React.Component<SingleAnswerQuizProp<number>> {
    render() {
        return (<div className="outer_box flex">
            <div className="single_answer_number">{this.props.text}</div>
            <input className="single_answer_number_answer" type="number"></input>
        </div>)
    }
}