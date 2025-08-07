import styled from "styled-components";
import logo from "../images/favicon.png";
import img from "../images/imgOquee.png";
import topico1 from "../images/topico1.png";
import topico2 from "../images/topico2.png";
import topico3 from "../images/topico3.png";
import topico4 from "../images/topico4.png";
import topico5 from "../images/topico5.png";
import topico6 from "../images/topico6.png";
import topico7 from "../images/topico7.png";
import topico8 from "../images/topico8.png";
import { FaCode } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";

export default function Home() {

    const Container = styled.div`
        font-family: Arial, sans-serif;
        background-color: #fdfdfd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;

    const Header = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: deeppink;
        padding: 16px 48px;
        width: 100%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

    const LogoLink = styled.a`
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
`;

    const Imagem = styled.img`
        width: 48px;
        height: auto;
        border-radius: 8px;
`;

    const Nav = styled.nav`
        display: flex;
        gap: 32px;
`;

    const NavLink = styled.a`
        color: white;
        text-decoration: none;
        font-weight: 500;
        position: relative;
        padding: 4px 0;
        transition: all 0.3s ease;

        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0%;
            height: 2px;
            background-color: white;
            transition: width 0.3s ease;
  }

        &:hover::after {
            width: 100%;
        }

        &:hover {
            transform: translateY(-2px);
  }
`;

    const WhatIs = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 80px;
`;

    const ImageWhatIs = styled.img`
        border-radius: 20px;
`;

    const CardsWhatIs = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-radius: 10px;
        width: 22%;
        background: deeppink;
        transition: all;
        transition-duration: 0.3s;

    &:hover {
        transform: scale(1.1);
  }
`;

    const CardsSection = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
        width: 80%;
        position: absolute;
        margin-top: 30%;
`;

    const TextWhatIs = styled.p`
    text-align: justify;
    color: white;
    font-weight: lighter;
    margin-top: 20px;
`;

    const TextCarac = styled.p`
        font-size: 40px;
        color: deeppink;
        font-weight: bold;
        padding-top: 200px;
`;

    const cards = [
        {
            id: 1,
            icon: <FaCode color="#fff" size={50} />,
            texto: "Styled Components é uma biblioteca para React que permite escrever estilos CSS diretamente dentro do JavaScript, utilizando a técnica chamada CSS-in-JS. Com ela, os estilos são aplicados diretamente aos componentes, tornando o código mais organizado e modular."
        },
        {
            id: 2,
            icon: <BiLayer color="#fff" size={50} />,
            texto: "Ao invés de usar classes globais, o Styled Components cria estilos únicos para cada componente, evitando conflitos de CSS e facilitando a manutenção. Ele também permite o uso de props para alterar dinamicamente os estilos de forma simples e intuitiva."
        },
        {
            id: 3,
            icon: <MdDesignServices color="#fff" size={50} />,
            texto: "Além disso, a biblioteca oferece suporte a temas, escopo automático de CSS e melhor integração com ferramentas modernas de desenvolvimento. É uma solução elegante e poderosa para estilizar aplicações React de forma eficiente."
        }
    ];

    const caracteristicas = [
        {
            id: 1,
            titulo: "CSS-in-JS",
            descricao: "Escreva estilos diretamente dentro do seu código JavaScript/React, eliminando a separação entre lógica e aparência.",
            img: topico1
        },
        {
            id: 2,
            titulo: "Escopo automático de estilos",
            descricao: "Os estilos são aplicados localmente a cada componente, evitando conflitos com outras partes da aplicação.",
            img: topico2
        },
        {
            id: 3,
            titulo: "Estilização condicional com props",
            descricao: "Altere dinamicamente os estilos de um componente com base nas props recebidas.",
            img: topico3
        },
        {
            id: 4,
            titulo: "Suporte a temas com ThemeProvider",
            descricao: "Use temas globais para aplicar cores, fontes e estilos em toda a aplicação com consistência.",
            img: topico4
        },
        {
            id: 5,
            titulo: "Componentes reutilizáveis",
            descricao: "Crie componentes de estilo que podem ser reaproveitados várias vezes com consistência visual.",
            img: topico5
        },
        {
            id: 6,
            titulo: "Composição de estilos",
            descricao: "Estenda ou modifique componentes existentes sem duplicar código.",
            img: topico6
        },
        {
            id: 7,
            titulo: "Integração com TypeScript",
            descricao: "Styled Components oferece tipagem para props e temas, tornando o desenvolvimento mais seguro e produtivo.",
            img: topico7
        },
        {
            id: 8,
            titulo: "Organização do código",
            descricao: "Estilizar junto com o componente melhora a leitura e manutenibilidade da aplicação.",
            img: topico8
        },
    ];


    return (
        <Container>
            <Header>
                <LogoLink href="#topo">
                    <Imagem src={logo} alt="Logo" />
                </LogoLink>
                <Nav>
                    <NavLink href="#oque">O que é?</NavLink>
                    <NavLink href="#caracteristicas">Características</NavLink>
                    <NavLink href="#comandos">Principais comandos</NavLink>
                    <NavLink href="#como-usar">Como usar</NavLink>
                </Nav>
            </Header>

            <WhatIs id="oque">
                <ImageWhatIs src={img} alt="" />

                <CardsSection>
                    {cards.map((card, index) => (
                        <CardsWhatIs key={card.id}>
                            {card.icon}
                            <TextWhatIs>{card.texto}</TextWhatIs>
                        </CardsWhatIs>
                    ))}
                </CardsSection>
            </WhatIs>

            <TextCarac>Características Styled Component</TextCarac>
            aaaa

            {/*
    
            <Section id="caracteristicas">
                <Title>Quais as características?</Title>
                <Text>
                    Com Styled Components, é possível criar componentes estilizados reutilizáveis, com escopo de estilo local, suporte a temas, aninhamento de estilos e uso de props para estilização condicional.
                </Text>
            </Section>

            <Section id="comandos">
                <Title>Principais comandos</Title>
                <Text>
                    - `styled.div`, `styled.button`, `styled.h1`, etc.<br />
                    - Uso de interpolação com props: `${props => props.active ? 'red' : 'blue'}`<br />
                    - `ThemeProvider` para definir temas globais
                </Text>
            </Section>

            <Section id="como-usar">
                <Title>Como usar</Title>
                <Text>
                    Basta instalar com `npm install styled-components` e importar no seu componente com `import styled from 'styled-components'`. Depois, use a sintaxe de template literals para criar seus estilos.
                </Text>
            </Section>
            */}
        </Container>
    );
};