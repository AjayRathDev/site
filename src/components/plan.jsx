import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: space-between;
    padding: 25px;
    height: 80px;
    box-shadow: 2px 5px 8px rgba(0,0,0,30%);

`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500px;
    color: blueviolet;
    cursor: pointer;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Progess = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: rgba(40, 40, 40, 15%);
    height: 15px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
        width: 60%;
        height: 100%;
        background: #fbac47;
        border-radius: 15px;
    }
    p {
        margin-right: -35px;
        font-size: 12px;
        font-weight: 500 ;
    }
`;

const Plan = ({plan}) =>{
    const navigate = useNavigate();
    let p = 0;
    plan.goals.map((goal) => {
        p += Math.round(Number(Object.keys(goal).map((key) => goal[key]))/plan.goals.length)
    })
    return (
      <Card>
        <Title onClick={() => navigate(`/plan/${plan.name}`)}>{plan.name}</Title>
        <Info><p>Due: {plan.due}</p><Progess><div></div><p>{p}%</p></Progess></Info>
      </Card>
    );
}
export default Plan;