import React from 'react';
import { TopTenEntryProp, TopTenProp } from '../props';
import "./top_ten.scss"
import Empty from '../util/empty';

class Entry extends React.Component<TopTenEntryProp> {
    render() {
        return (
            <div data-v={this.props.entries[this.props.n-1]} className='top_ten_entry' id={"top_ten_"+this.props.id+"_"+this.props.entries[this.props.n-1].toLowerCase()}>
                {this.props.n}:
            </div>
        );
    }
}

class Input extends React.Component<TopTenProp> {
    render() {
        const p: any[] = []
        
        p[0] = <input id={"top_ten_"+this.props.id+"_input"} className='top_ten_input' placeholder='Gib hier ein, was du denkst, dass dazugehört...' onKeyUp={e=>{
            if(e.key==="Enter"){
                const j = document.getElementById("top_ten_"+this.props.id+"_input")
                const i = document.getElementById("top_ten_"+this.props.id+"_"+(j as HTMLInputElement).value.toLowerCase())

                if(!i) return;

                if(i!!.innerText.length<4) {
                    i.innerText=i.innerText+" "+i.dataset.v
                }

                (j as HTMLInputElement).value=""
            }
        }}>
            
        </input>

        return (
            p[0]
        );
    }
}

class TopTen extends React.Component<TopTenProp> {
    render() {
        return (
            <div className='outer_box'>
                {this.props.text}
                <Empty height={30}></Empty>
                <Input id={this.props.id} entries={this.props.entries} text={this.props.text}></Input>
                <Empty height={30}></Empty>
                <div style={{display:"flex"}}>
                    <div style={{width: "50%"}}>
                        <Entry entries={this.props.entries} id={this.props.id} n={1}></Entry>
                        <Entry entries={this.props.entries} id={this.props.id} n={2}></Entry>
                        <Entry entries={this.props.entries} id={this.props.id} n={3}></Entry>
                        <Entry entries={this.props.entries} id={this.props.id} n={4}></Entry>
                        <Entry entries={this.props.entries} id={this.props.id} n={5}></Entry>
                    </div>
                    <div style={{width: "50%"}}>
                        <Entry entries={this.props.entries} id={this.props.id} n={6}></Entry>
                        <Entry entries={this.props.entries} id={this.props.id} n={7}></Entry>
                        <Entry entries={this.props.entries} id={this.props.id} n={8}></Entry>
                        <Entry entries={this.props.entries} id={this.props.id} n={9}></Entry>
                        <Entry entries={this.props.entries} id={this.props.id} n={10}></Entry>
                    </div>
                </div>
                <div className="right_flex">
                    <div className="understood_checkbox" onClick={e=>{
                        for (let index = 0; index < this.props.entries.length; index++) {
                            const element = this.props.entries[index];
                            const i = document.getElementById("top_ten_"+this.props.id+"_"+element.toLowerCase())

                            if(i!!.innerText.length<4)
                                i!!.innerHTML = (index+1)+": <span style=color:#DD4444>"+element+"</span>"
                        }
                    }}>Auflösen</div>
                </div>
            </div>
        );
    }
}

export default TopTen