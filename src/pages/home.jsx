import React from "react";
import styled from "styled-components";

import Plan from "../components/plan";

const Container = styled.div`
  padding: 10px;
`;

const plans = [
  {
    name: "Learn Javascript",
    goals: [
      { 'Coverage': 40 },
      { 'Theoritical Knowledge': 70 },
      { 'Pratical Knowledge': 60 },
    ],
    due: '22/06/2022',
  },
  {
    name: "Learn React",
    goals: [
      { 'Coverage': 45 },
      { 'Theoritical Knowledge': 60 },
      { 'Pratical Knowledge': 52 },
    ],
    due: '22/06/2022',
  },
  {
    name: "Master NodeJs",
    goals: [
      { 'Coverage': 40 },
      { 'Theoritical Knowledge': 70 },
      { 'Pratical Knowledge': 60 },
    ],
    due: '22/07/2022',
  }
];

const Home = () => {
  return (
    <Container>
      {plans.map((ele, index) => <Plan key={index} plan={ele} />)}
    </Container>
  );
};
export default Home;
