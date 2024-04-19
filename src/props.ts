export interface IDProp {
    id: string
}

export interface SlideShowProp {
    id: string,
    length: number,
    showArrows?: false
}

export interface ThreeElementProp {
    first: JSX.Element | JSX.Element[] | string | string[] | (string | JSX.Element)[];
    second: JSX.Element | JSX.Element[] | string | string[] | (string | JSX.Element)[];
    third: JSX.Element | JSX.Element[] | string | string[] | (string | JSX.Element)[];
    text: string;
}

export interface TwoElementProp {
    first: JSX.Element | JSX.Element[] | string | string[] | (string | JSX.Element)[];
    second: JSX.Element | JSX.Element[] | string | string[] | (string | JSX.Element)[];
    text: string;
}

export interface OverTimeElementProp {
    texts: (JSX.Element | JSX.Element[] | string | string[] | (string | JSX.Element)[])[][]
}

export interface MultipleChoiceQuestionElementProp {
    text: string;
    first: string;
    second: string;
    third: string;
    fourth: string;
    correct: 0 | 1 | 2 | 3;
    quiz: any
}

export interface MultipleChoiceEndElementProp {
    quiz: any
}

export interface BooleanQuestionElementProp {
    text: string;
    isTrue: boolean;
    trueText: string;
    falseText: string;
    quiz: any[]
}

export interface SimpleArrayProp {
    array: any[]
}

export interface HeightProp {
    height?: number
}

export interface SimpleChildrenProp {
    children: any
}

export interface NamedQuestionProp {
    text: string;
    id: string;
    children?: JSX.Element[];
}

export interface UntitledQuestionProp {
    id: string;
    children?: JSX.Element[];
}

export interface TopTenProp {
    text: string;
    id: string;
    entries: string[];
}

export interface TopTenEntryProp {
    id: string;
    n: number
    entries: string[];
}

export interface AnimatedTextProp {
    str: string;
    maxLength: number;
    frame: number
}

export interface AnimationButtonProp {
    str: string;
    frame: number;
    maxLength: number;
    size?: number;
}

export interface IconButtonProp {
    className: string;
    icon: string
    action: ()=>any;
}

export interface TabProp {
    text: string;
    icon: string;
    tab: string;
    children?: JSX.Element
}

export interface TextProp {
    text: string;
    size: number;
}

export interface ElementTextProp {
    text?: JSX.Element | string;
    children?: JSX.Element | JSX.Element[] | string | string[] | (string | JSX.Element)[];
    size: number;
}

export interface SingleAnswerQuizProp<T> {
    text: string;
    answer: T;
}