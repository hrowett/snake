import React, { Component } from 'react';
import RangeSlider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import '../../../styles/slider/slider.css';

class Slider extends Component {

    handleChange = (value, e) => {
        this.props.onChange(value);
        e.preventDefault();
    }


    render() {

        return (
            <div className="sliderComponent">
                <div className="sliderLabel">{this.props.label}</div>
                <RangeSlider className="rangeSlider" value={this.props.value}
                        orientation="vertical"
                        min={this.props.minValue}
                        max={this.props.maxValue}
                        tooltip={false}
                        onChange={this.handleChange}/>
                <div className="sliderValue">{this.props.value}</div>
            </div>
        )
    }
}

export default Slider;