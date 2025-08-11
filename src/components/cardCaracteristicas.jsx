import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    border-radius: 15px;
    padding: 20px;
    background-color: #B2B0E8;
    transition: transform 0.3s ease;
    height: 100%; 

    &:hover {
        transform: scale(1.03);
    }
`;

const Textos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`;

const TituloCard = styled.h3`
    font-size: 1.25rem; 
    font-weight: bold;
    text-align: center;
    color: white;
`;

const DescricaoCard = styled.p`
    font-size: 1rem; 
    color: white;
    text-align: center;
    font-weight: 300;
    margin-top: 15px;
`;

const ImgCard = styled.img`
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
`;

export function CardCaracteristicas({ titulo, descricao, img }) {
    return (
        <CardContainer>
            <ImgCard src={img} alt={titulo} />
            <Textos>
                <TituloCard>{titulo}</TituloCard>
                <DescricaoCard>{descricao}</DescricaoCard>
            </Textos>
        </CardContainer>
    );
}