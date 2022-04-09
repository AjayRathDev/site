import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';

let colors = [ '#3071A9', '#74A9D8', '#65001C', '#205928', '#FF96AB',  '#50555C', '#A1D0FF'];
colors = _.shuffle(colors);

const Input = styled.input.attrs({
  type: "range",
  min: 0,
  max: 100,
})`
  height: 26px;
  -webkit-appearance: none;
  width: 100%;
  ${({index}) => `
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    animate: 0.2s;
    background: ${colors[index]};
    border-radius: 10px;
  }
  &::-moz-range-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    animate: 0.2s;
    background: ${colors[index]};
    border-radius: 10px;
  }
  ::-ms-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    animate: 0.2s;
    background: ${colors[index]};
    border-radius: 10px;
  }`}
  ::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000031;
    border: 1px solid #00001e;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000031;
    border: 1px solid #00001e;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
  ::-ms-thumb {
    box-shadow: 1px 1px 1px #000031;
    border: 1px solid #00001e;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
`;

export const Slider = ({ progress, index }) => {
  const [value, setValue] = useState(progress || 0);

  return <><Input index={index%7} value={value} onChange={(e) => setValue(e.target.value)}/><label>{value}%</label></>;
};
