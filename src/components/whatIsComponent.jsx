import styled from "styled-components";
import icon from "../images/icon.png";

const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #7A85C1;
    padding: 10% 5%;
    border-radius: 15px;
    text-align: center;
    width: 100%;
`;

const FirstSentence = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    gap: 15px;
    font-size: 2.5rem; 

    @media (min-width: 768px) {
        font-size: 3.75rem; 
    }

    @media (min-width: 414px) {
        margin-bottom: 40px;
        font-size: 2rem; 
    }

    img {
        width: 40px;
        @media (min-width: 768px) {
            width: auto; 
        }
    }
`;

const SecondSentence = styled.p`
    color: white;
    font-weight: bold;
    font-size: 1.25rem; 
    margin-top: 10px;

    @media (min-width: 768px) {
        font-size: 2rem; 
        margin-bottom: 40px;
    }
`;

export function WhatIsComponent() {
    return (
        <ContainerImg>
            <FirstSentence>
                <img src={icon} alt="" />
                <p>styled-components</p>
            </FirstSentence>
            <SecondSentence>Style your React.js apps without stress</SecondSentence>
        </ContainerImg>
    );
}