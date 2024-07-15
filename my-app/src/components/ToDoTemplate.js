import React from "react";
import styled from "styled-components";

const Templete = styled.div`
    width: 512px;
    height : 800px;
    margin : 6em auto;
    padding : 0;
    border-radius: 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 90%;
        height: auto;
        margin: 5em auto;
    }
`
const Title = styled.h4`
    background: skyblue;
    color: black;
    height: 4em;
    margin : 0;
    font-size: 1.5em;
    display: flex;
    border-radius : 20px 20px 0px 0px;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    background : #f1f3f5;
    height : calc(100% - 4em);
    overflow-y : auto;
    border-radius : 0px 0px 20px 20px;
`

const ToDoTemplete = ({ children }) => {
    return (
        <Templete>
            <Title>오늘의 할일</Title>
            <Content>{children}</Content>
        </Templete>
    );
};

export default ToDoTemplete;
