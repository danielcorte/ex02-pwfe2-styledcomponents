import styled from "styled-components";

export function CardCaracteristicas({ titulo, descricao, img }) {

    const CardCarac = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 15px;
        padding: 20px;
        width: 90%;
        height: 550px;
        background-color: deeppink;
        transition: all;
        transition-duration: 0.3s;

        &:hover {
            transform: scale(1.03);
    }
    `;

    const Textos = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
    `;

    const TituloCard = styled.h1`
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        color: white;
        margin-top: 50px;
    `;

    const DescricaoCard = styled.h1`
        font-size: 16px;
        color: white;
        text-align: center;
        font-weight: lighter;
        margin-top: 30px;
        padding-bottom: 20px;
    `;

    const ImgCard = styled.img`
        height: auto;
        width: 300px;
        border-radius: 10px;
    `;

    return (
        <CardCarac>
            <ImgCard src={img} alt="" />

            <Textos>
                <TituloCard>{titulo}</TituloCard>
                <DescricaoCard>{descricao}</DescricaoCard>
            </Textos>
        </CardCarac>
    );
}