import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    height: 50px;
`;

const Author = styled.div``;

const Title = styled.div`
    min-width: 420px;
  > p {
    font-weight: 500;
    &:first-child {
      font-size: 18px;
    }

    &:last-child {
      text-align: end;
      font-size: 10px;
    }
  }
`;

const Action = styled.div``;


const Post = ({ post }) => {
    return ( 
    <Card>
        <Title><p>A Post</p><p>21 5 2021</p></Title>
        <Author>By Me</Author> 
        <Action>Edit</Action>
    </Card>);
}
export default Post