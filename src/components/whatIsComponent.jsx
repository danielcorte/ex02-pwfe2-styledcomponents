import styled from "styled-components";
import icon from "../images/icon.png";

const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: deeppink;
    padding: 7% 7.5% 10% 7.5%;
    border-radius: 15px;
`;

const FirstSentence = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 60px;
    gap: 15px;
`;

const SecondSetence = styled.p`
    color: white;
    font-weight: bold;
    font-size: 33px;
`;

export function WhatIsComponent() {
    return (
        <ContainerImg>
            <FirstSentence>
                <img src={icon} alt="" /><p>styled-components</p>
            </FirstSentence>

            <SecondSetence>Style your React.js apps without stress</SecondSetence>
        </ContainerImg>
    );
}