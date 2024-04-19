import React from "react";
import { TabText } from "./text";
import { TabProp } from "./props";

export class Tab extends React.Component<TabProp> {
    render() {
        return (
            <div className="overtab">
                <div className='tab' onClick={e => {
                    const d = document.getElementById("__tabs__")
                    d?.childNodes.forEach(e => {
                        (e as HTMLElement).style.display = "none"
                    })

                    document.getElementById(this.props.tab)!!.style.display = "block"
                }}>
                    <span className="material-symbols-outlined icon_tab">
                        {this.props.icon}
                    </span>
                    <TabText text={this.props.text} size={20}></TabText>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export class UnderTab extends Tab {
    override render() {
        return (
            <div className='tab undertab' onClick={e => {
                const d = document.getElementById("__tabs__")
                d?.childNodes.forEach(e => {
                    (e as HTMLElement).style.display = "none"
                })
                const h = document.getElementById("_" + this.props.tab.split("_")[1])!!

                h.style.display = "block"

                const j = document.getElementById(this.props.tab)!!

                j.scrollIntoView({ block: 'start',  behavior: 'smooth' })
            }}>
                <span className="material-symbols-outlined icon_tab">
                    {this.props.icon}
                </span>
                <TabText text={this.props.text} size={15}></TabText>
            </div>
        );
    }
}

const functionTabs = <>
    <UnderTab text="Was ist KI?" icon="subdirectory_arrow_right" tab="_function_1"></UnderTab>
    <UnderTab text="Neuronale Netzwerke" icon="subdirectory_arrow_right" tab="_function_2"></UnderTab>
    <UnderTab text="Generative KI" icon="subdirectory_arrow_right" tab="_function_3"></UnderTab>
</>

const developmentTabs = <>
    <UnderTab text="KI im Zeitlichen Verlauf" icon="subdirectory_arrow_right" tab="_development_1"></UnderTab>
    <UnderTab text="Wie wird KI sich weiterentwickeln?" icon="subdirectory_arrow_right" tab="_development_2"></UnderTab>
</>

const aiTabs = <>
    <UnderTab text="Wo wird KI in Erebos eingesetzt?" icon="subdirectory_arrow_right" tab="_ai_1"></UnderTab>
    <UnderTab text="Was ist das für eine KI?" icon="subdirectory_arrow_right" tab="_ai_2"></UnderTab>
    <UnderTab text="Wie funktioniert diese KI?" icon="subdirectory_arrow_right" tab="_ai_3"></UnderTab>
</>

const Tabs = <>
    <Tab text="Funktionsweise" icon="neurology" tab="_function">{functionTabs}</Tab>
    <Tab text="KI in Erebos" icon="menu_book" tab="_ai">{aiTabs}</Tab>
    <Tab text="Entwicklung über Zeit" icon="hourglass_top" tab="_development">{developmentTabs}</Tab>
</>

export default function tabs() {
    return Tabs
}