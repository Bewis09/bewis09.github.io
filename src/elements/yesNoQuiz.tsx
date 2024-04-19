import React, { useState } from 'react';
import "./yes_no_quiz.scss"
import { BooleanQuestionElementProp, IDProp, NamedQuestionProp, SimpleArrayProp } from '../props';
import Music from '../music';

const endTexts = [
    ["So schlecht kann man doch nicht sein!",0],
    ["Immerhin etwas!",0.2],
    ["Das ist noch Luft nach oben!",0.4],
    ["Das kannst du doch besser...",0.6],
    ["Das war doch schon recht gut!",0.8],
    ["Das letzte bisschen schaffst du auch noch!",0.999],
    ["Super gemacht!",1]
]

export const EndElement: React.FC<SimpleArrayProp> = (props) => {
    return (
        <div className='yes_no_question'>
            
        </div>
    )
}

export const Element: React.FC<BooleanQuestionElementProp> = (props) => {

    const t: JSX.Element[] = []
    const f: JSX.Element[] = []

    const tChanger: ([string, React.Dispatch<React.SetStateAction<string>>] | [number, React.Dispatch<React.SetStateAction<number>>])[] = [
        useState<string>("50%"),
        useState<number>(1),
        useState<string>("10px"),
        useState<string>("10px"),
        useState<string>("20px")
    ]

    const fChanger: ([string, React.Dispatch<React.SetStateAction<string>>] | [number, React.Dispatch<React.SetStateAction<number>>])[] = [
        useState<string>("50%"),
        useState<number>(1),
        useState<string>("10px"),
        useState<string>("10px"),
        useState<string>("20px")
    ]

    const a = props.quiz[2]

    t[0] = <div className='field' onClick={
        e => {
            playAnimation(true, props, t[0], f[0], fChanger, tChanger, a)
        }
    } style={{ backgroundColor: "green", width: fChanger[0][0], padding: fChanger[2][0], opacity: fChanger[1][0], margin: fChanger[3][0], fontSize: fChanger[4][0] }}>{props.trueText}</div>
    f[0] = <div className='field' onClick={
        e => {
            playAnimation(false, props, t[0], f[0], fChanger, tChanger, a)
        }
    } style={{ backgroundColor: "red", width: tChanger[0][0], padding: tChanger[2][0], opacity: tChanger[1][0], margin: tChanger[3][0], fontSize: tChanger[4][0] }}>{props.falseText}</div>

    return (
        <div className='yes_no_question'>{props.text}
            <div className='answerbox'>
                {t}{f}
            </div>
        </div>
    )
}

function playAnimation(clickedState: boolean, props: BooleanQuestionElementProp, t: JSX.Element, f: JSX.Element, fChanger: ([any, React.Dispatch<React.SetStateAction<any>>])[], tChanger: ([any, React.Dispatch<React.SetStateAction<any>>])[], a:number) {

    if(a!==props.quiz[1][0] || a!==props.quiz[1][2]) return
    
    const parent = props.quiz[0]
    const isTrue = props.isTrue

    if (isTrue) {
        (tChanger[0])[1]("0");
        (tChanger[1])[1](0);
        (tChanger[2])[1]("0");
        (tChanger[3])[1]("0");
        (tChanger[4])[1]("0");
        (fChanger[0])[1]("100%");
    } else {
        (fChanger[0])[1]("0");
        (fChanger[1])[1](0);
        (fChanger[2])[1]("0");
        (fChanger[3])[1]("0");
        (fChanger[4])[1]("0");
        (tChanger[0])[1]("100%");
    }
    
    const j = document.getElementById("questions_yes_no_" + parent.props.id) as HTMLElement
    
    const k = document.getElementById("stat_yes_no_" + parent.props.id) as HTMLElement

    if(isTrue===clickedState) {
        new Music("correct.mp3").play()
        k.innerHTML = ((parseInt(k.innerHTML.split("/")[0]))+1)+"/"+props.quiz[1][1]
    } else {
        new Music("wrong.mp3").play()
    }

    props.quiz[1][2]+=1
    
    setTimeout(() => {
            (j?.children[props.quiz[1][0]] as HTMLElement).style.display = "none";
            (j?.children[props.quiz[1][0]+=1] as HTMLElement).style.display = "block";
    }, 1000);
        
    if(props.quiz[1][1]===a+1)
        (j?.children[props.quiz[1][0]+1] as HTMLElement).innerHTML = "Du hattest "+k.innerHTML.replace("/"," von ")+" richtig!<br><br>"+getTextOfCorrect(k.innerHTML)
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

const StartButton: React.FC<IDProp> = ({ id }) => {

    const [display, setDisplay] = useState<string>("block");

    const h = <div style={{ display: display }} onClick={
        () => {
            const j = document.getElementById("questions_yes_no_" + id) as HTMLElement
            const element = j?.children[0] as HTMLElement;
            element.style.display = "block"
            j.style.display = "block"
            setDisplay("none")
        }
    } className='start_button'>
        Quiz starten
    </div>
    return (h);
}

class YesNoQuiz extends React.Component<NamedQuestionProp> {
    render() {
        const p = [0,0,0]

        this.props.children?.forEach(e => {
            e.props.quiz[0] = this
            e.props.quiz[1] = p
            e.props.quiz[2] = p[1]
            p[1]++
        })

        return (
            <div className='yes_no_quiz outer_box'>
                {this.props.text}
                <StartButton id={this.props.id}></StartButton>
                <div id={'questions_yes_no_' + this.props.id} className='yes_no_questions'>
                    {this.props.children}
                    <EndElement array={[this,p,p[1]-1,this.props.id]}></EndElement>
                </div>
                <div className='answer_stats' id={'stat_yes_no_'+this.props.id}>
                    0/{p[1]}
                </div>
            </div>
        );
    }
}

export default YesNoQuiz