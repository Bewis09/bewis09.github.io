import React from "react";
import { ElementTextProp, TextProp } from "./props";

export class LeftText extends React.Component<ElementTextProp> {
  render() {
    return (
      <div style={{ "fontSize": this.props.size, "textAlign":"start"}}>
        {this.props.text ?? this.props.children}
      </div>
    );
  }
}

export class SizedText extends React.Component<ElementTextProp> {
  render() {
    return (
      <div style={{ "fontSize": this.props.size }}>
        {this.props.text ?? this.props.children}
      </div>
    );
  }
}

export class CenteredText extends React.Component<ElementTextProp> {
  render() {
    return (
      <div className='text_middle' style={{ "fontSize": this.props.size }}>
        {this.props.text ?? this.props.children}
      </div>
    );
  }
}

export class InfoBoxText extends React.Component<ElementTextProp> {
  render() {
    return (
      <div className='outer_box'>
        <div className='box_text' style={{ "fontSize": this.props.size }}>
          <div>
          {this.props.text ?? this.props.children}
          </div>
        </div>
        <div className="right_flex">
          <div className="understood_checkbox" onClick={(e)=>{
            (e.target as HTMLElement).innerText = "Verstanden";
            (e.target as HTMLElement).style.width = "120px";
            (e.target as HTMLElement).style.transition = "background-color 0.2s";
            (e.target as HTMLElement).style.backgroundColor = "green";
          }}>Verstanden?</div>
        </div>
      </div>
    );
  }
}

export class BoxText extends React.Component<ElementTextProp> {
  render() {
    return (
      <div className='outer_box'>
        <div className='box_text' style={{ "fontSize": this.props.size }}>
          <div>
          {this.props.text ?? this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export class TabText extends React.Component<TextProp> {
  render() {
    return (
      <div className='tab_text' style={{ "fontSize": this.props.size }}>
        {this.props.text}
      </div>
    );
  }
}

export class InfoText extends React.Component<TextProp> {
  render() {
    return (
      <div className='info_text' style={{ "fontSize": this.props.size }}>
        {this.props.text}
      </div>
    );
  }
}