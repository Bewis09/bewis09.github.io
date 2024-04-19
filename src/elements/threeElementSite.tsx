import React from 'react';
import "./three_element_site.scss"
import { ThreeElementProp, TwoElementProp } from '../props';
import Empty from '../util/empty';
import { InfoBoxText } from '../text';

export class ThreeElementSite extends React.Component<ThreeElementProp> {
    render() {
        return (
            <div className='outer_box'>
                {this.props.text}
                <Empty></Empty>
                <InfoBoxText size={20}>{this.props.first}</InfoBoxText>
                <InfoBoxText size={20}>{this.props.second}</InfoBoxText>
                <InfoBoxText size={20}>{this.props.third}</InfoBoxText>
            </div>
        );
    }
}

export class TwoElementSite extends React.Component<TwoElementProp> {
    render() {
        return (
            <div className='outer_box'>
                {this.props.text}
                <Empty></Empty>
                <InfoBoxText size={20}>{this.props.first}</InfoBoxText>
                <InfoBoxText size={20}>{this.props.second}</InfoBoxText>
            </div>
        );
    }
}