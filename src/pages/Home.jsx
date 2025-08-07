import styled from "styled-components";

export default function Home() {

    const StyledButton = styled.button`
        background-color: #6200ee;
        color: white;
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
            background-color: #3700b3;
  }
`;


    return (
        <main>
            Hello moto

            <StyledButton>Botão Estilizado</StyledButton>
        </main>
    )
}