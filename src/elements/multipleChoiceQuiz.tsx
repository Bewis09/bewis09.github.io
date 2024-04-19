import React from 'react';
import "./multiple_choice_quiz.scss"
import { MultipleChoiceEndElementProp, MultipleChoiceQuestionElementProp, UntitledQuestionProp } from '../props';

const endTexts = [
    ["So schlecht kann man doch nicht sein!",0],
    ["Immerhin etwas!",0.2],
    ["Das ist noch Luft nach oben!",0.4],
    ["Das kannst du doch besser...",0.6],
    ["Das war doch schon recht gut!",0.8],
    ["Das letzte bisschen schaffst du auch noch!",0.999],
    ["Super gemacht!",1]
]

export const EndElement: React.FC<MultipleChoiceEndElementProp> = (props) => {
    return (
        <div className='multiple_choice_question' id={"ms_quiz_"+props.quiz.id+"_end"}>
            
        </div>
    )
}

export const Element: React.FC<MultipleChoiceQuestionElementProp> = (props) => {
    return (
        <div className='multiple_choice_question' id={"ms_quiz_"+props.quiz.id+"_"+props.quiz.index} style={{display: props.quiz.index===0?"block":"none"}}>{props.text}
            <div className='answer' id={"ms_quiz_"+props.quiz.id+"_"+props.quiz.index+"_0"} onClick={_=>clicked(props.quiz.index,0,props.correct,props.quiz.id)}>{props.first}</div>
            <div className='answer' id={"ms_quiz_"+props.quiz.id+"_"+props.quiz.index+"_1"} onClick={_=>clicked(props.quiz.index,1,props.correct,props.quiz.id)}>{props.second}</div>
            <div className='answer' id={"ms_quiz_"+props.quiz.id+"_"+props.quiz.index+"_2"} onClick={_=>clicked(props.quiz.index,2,props.correct,props.quiz.id)}>{props.third}</div>
            <div className='answer' id={"ms_quiz_"+props.quiz.id+"_"+props.quiz.index+"_3"} onClick={_=>clicked(props.quiz.index,3,props.correct,props.quiz.id)}>{props.fourth}</div>
        </div>
    )
}

function clicked(quizIndex:number,answerIndex:number,correct:number,id:string) {
    const a = document.getElementById("ms_quiz_"+id+"_"+quizIndex)
    const b = document.getElementById("ms_quiz_"+id+"_"+(quizIndex+1)) ?? document.getElementById("ms_quiz_"+id+"_end")
    
    const c = document.getElementById("ms_quiz_"+id+"_"+quizIndex+"_"+answerIndex)
    const d = document.getElementById("ms_quiz_"+id+"_"+quizIndex+"_"+correct)

    const e = document.getElementById("ms_quiz_"+id+"_end")
    const f = document.getElementById("stat_ms_"+id)!!

    c!!.style.backgroundColor = "red"
    d!!.style.backgroundColor = "green"

    if(c===d)
        f.innerText = (parseInt(f.innerText.split("/")[0])+1)+"/"+f.innerText.split("/")[1]

    setTimeout(() => {
        a!!.style.display = "none"
        b!!.style.display = "block"

        if(e===b) {
            f!!.style.display = "none"
            e!!.innerHTML = "Du hattest "+f.innerHTML.replace("/"," von ")+" richtig!<br><br>"+getTextOfCorrect(f.innerHTML)
        }
    }, 1000);
}

function getTextOfCorrect(p:string): string {
    const c = parseInt(p.split("/")[0])
    const t = parseInt(p.split("/")[1])
    const f = c/t

    for (let v in endTexts) {
        if(f<=parseFloat(endTexts[v][1].toString())) return endTexts[v][0].toString()
    }

    return ""
}

class MultipleChoiceQuiz extends React.Component<UntitledQuestionProp> {
    render() {

        var i = -1

        this.props.children?.forEach(e=>{
            i++
            e.props.quiz.index = i
            e.props.quiz.id = this.props.id
        })

        return (
            <div className='multiple_choice_quiz outer_box'>
                {this.props.children}
                <EndElement quiz={{index:i+1,id:this.props.id}}></EndElement>
                <div className='answer_stats' id={'stat_ms_'+this.props.id}>
                    0/{i+1}
                </div>
            </div>
        );
    }
}

export default MultipleChoiceQuiz