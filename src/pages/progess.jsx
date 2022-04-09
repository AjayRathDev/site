import React from "react";
import styled from "styled-components";

import { Slider } from "../components/slider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  box-shadow: 1px 4px 6px rgb(40, 20, 40, 40%);
  > p {
      font-size: 20px;  
      font-weight: 600;
      text-align: left;
      padding: 20px 10px;
      text-transform: capitalize ;
    }
  > div {
    border-top: 1px solid rgb(40, 20, 40, 40%);
    border-right: 1px solid rgb(40, 20, 40, 40%);
    border-left: 1px solid rgb(40, 20, 40, 40%);
  }
  > div:last-child {
    border-bottom: 1px solid rgb(40, 20, 40, 40%);
  }
`;

const Label = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  align-items:center ;
  p {
      width: 40%;
      font-size: 18px;
      font-weight: 500;
      max-width: 380px;
      background-color: rgb(40, 20, 40, 10%);
      padding: 10px;
  }
  div {
    width: 60%;
    max-width: 580px;
    margin-right: 10px;
    display: flex;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    align-items: center;
    letter-spacing: 1.5px;
  }
`;

export default function progess() {
  return (
    <Container>
        <p>Learn React</p>
        <Label>
        <p>Coverage</p>
        <div>
          <Slider index={0} progress={40}/>
        </div>
      </Label>
      <Label>
        <p>Theoritical Knowledge</p>
        <div>
          <Slider index={1} progress={70}/>
        </div>
      </Label>
      <Label>
        <p>Practical Knowledge</p>
        <div>
          <Slider index={2} progress={60}/>
        </div>
      </Label>

    </Container>
  );
}
