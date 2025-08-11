import styled, { ThemeProvider } from "styled-components";

import { FaBars, FaTimes } from "react-icons/fa"; 
import { useState } from "react"; 

const theme = {
  colors: {
    primary: "rgb(56, 47, 168)",
    secondary: "#f869b5",
    textLight: "#fff",
    textDark: "#333",
    background: "#fdfdfd",
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
  },
};

// DEFINIR A ESTILIZAÇÃO DOS COMPONENTES 
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden; // Previne scroll horizontal
`;

// --- HEADER E NAVEGAÇÃO ---
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.primary};
  padding: 16px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 16px 48px;
  }
`;

const LogoLink = styled.a`
  /* Estilos do logo permanecem os mesmos */
`;

const Imagem = styled.img`
  width: 48px;
  height: auto;
  border-radius: 8px;
`;

// Navegação adaptável
const Nav = styled.nav`
  display: flex;
  flex-direction: column; // Padrão para mobile
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: ${props => props.theme.colors.primary};
  position: absolute;
  top: 78px; // Altura do Header
  left: 0;
  width: 100%;
  height: calc(100vh - 78px);
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    position: static;
    flex-direction: row;
    height: auto;
    width: auto;
    background: transparent;
    transform: translateX(0);
  }
`;

const NavLink = styled.a`
  /* Seus estilos de NavLink, talvez com fonte maior para mobile */
  font-size: 1.5rem;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

// Ícone do Menu Hamburguer
const MenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 11;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;


// --- SEÇÃO "O QUE É" ---
const WhatIs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 80px 20px;
  }
`;

// Cards com layout flexível
const CardsSection = styled.div`
  display: flex;
  flex-direction: column; // Mobile-first: uma coluna
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row; // Múltiplas colunas para telas maiores
    align-items: stretch; // Garante que os cards tenham a mesma altura
    gap: 30px;
  }
`;

const CardsWhatIs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: ${props => props.theme.colors.secondary};
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 400px; // Limita a largura em telas intermediárias

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      max-width: none; // Remove o limite para o flexbox gerenciar
  }
`;

const TextWhatIs = styled.p`
  /* ... seus estilos ... */
`;


// --- TÍTULOS DE SEÇÃO ---
const SectionTitle = styled.h2`
  font-size: 2rem; // Tamanho para mobile
  color: deeppink;
  font-weight: bold;
  text-align: center;
  margin: 60px 0 30px 0;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem; // Tamanho para desktop
    margin: 80px 0 45px 0;
  }
`;


// --- GRID DE CARACTERÍSTICAS ---
const GridCarac = styled.div`
  display: grid;
  gap: 20px; 
  width: 90%;
  max-width: 1200px;
  
  // Mobile-first: 1 coluna
  grid-template-columns: 1fr; 

  // Tablet: 2 colunas
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Desktop: 4 colunas
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// --- SEÇÃO DE COMANDOS ---
const SecaoComandos = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 40px;
  }
`;

const CardComando = styled.div`
  background-color: #ff1493;
  color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // Mobile-first: 1 coluna
  width: 100%;
  max-width: 450px;
  
  // Desktop: 2 colunas
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: calc(50% - 20px); // 50% da largura menos metade do gap
  }
`;
const CardTitulo = styled.h3`
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 8px;
`;

const CardDescricao = styled.p`
        margin-bottom: 12px;
`;

const Codigo = styled.pre`
        background-color: #fcaff1;
        padding: 12px;
        border-radius: 8px;
        overflow-x: auto;
        font-size: 14px;
        margin-bottom: 20px;
`;

const Botao = styled.button`
        background-color: ${(props) => (props.primary ? "#db7093" : "#f4a261")};
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-right: 10px;

        &:hover {
            transform: scale(1.05);
        }
`;

const Titulo = styled.h2`
        color: ${(props) => props.temaColor};
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
    titulo: "🧩 CSS-in-JS",
    descricao: "Escreva estilos diretamente dentro do seu código JavaScript/React, eliminando a separação entre lógica e aparência.",
    img: topico1
  },
  {
    id: 2,
    titulo: "🧼 Escopo automático de estilos",
    descricao: "Os estilos são aplicados localmente a cada componente, evitando conflitos com outras partes da aplicação.",
    img: topico2
  },
  {
    id: 3,
    titulo: "🎯 Estilização condicional com props",
    descricao: "Altere dinamicamente os estilos de um componente com base nas props recebidas.",
    img: topico3
  },
  {
    id: 4,
    titulo: "🎨 Suporte a temas com ThemeProvider",
    descricao: "Use temas globais para aplicar cores, fontes e estilos em toda a aplicação com consistência.",
    img: topico4
  },
  {
    id: 5,
    titulo: "♻️ Componentes reutilizáveis",
    descricao: "Crie componentes de estilo que podem ser reaproveitados várias vezes com consistência visual.",
    img: topico5
  },
  {
    id: 6,
    titulo: "🔗 Composição de estilos",
    descricao: "Estenda ou modifique componentes existentes sem duplicar código.",
    img: topico6
  },
  {
    id: 7,
    titulo: "⚙️ Integração com TypeScript",
    descricao: "Styled Components oferece tipagem para props e temas, tornando o desenvolvimento mais seguro e produtivo.",
    img: topico7
  },
  {
    id: 8,
    titulo: "🛠️ Organização do código",
    descricao: "Estilizar junto com o componente melhora a leitura e manutenibilidade da aplicação.",
    img: topico8
  },
];

const comandosStyled = [
  {
    titulo: "styled.element",
    descricao: "Permite criar componentes estilizados diretamente de elementos HTML.",
    codigo: `const Botao = styled.button\`
  background-color: #db7093;
  color: white;
  padding: 10px;
\`;`,
    icone: <FaCode size={20} />,
    exemplo: <Botao>Normal</Botao>
  },
  {
    titulo: "Props",
    descricao: "Use props para alterar estilos dinamicamente.",
    codigo: `const Botao = styled.button\`
  background-color: \${props => props.primary ? "#db7093" : "#f4a261"};
\`;`,
    icone: <FaCogs size={20} />,
    exemplo: (
      <>
        <Botao>Normal</Botao>
        <Botao primary>Primário</Botao>
      </>
    )
  },
  {
    titulo: "ThemeProvider",
    descricao: "Permite definir temas globais reutilizáveis em todo o projeto.",
    codigo: `const theme = {
  colors: {
    principal: "#db7093"
  }
};

<ThemeProvider theme={theme}>...</ThemeProvider>`,
    icone: <FaPalette size={20} />,
    exemplo: <Titulo temaColor={theme.colors.principal}>Texto com tema</Titulo>
  },
  {
    titulo: "Estender estilos",
    descricao: "Crie novos componentes reaproveitando estilos existentes.",
    codigo: `const BotaoPrimario = styled(Botao)\`
  font-weight: bold;
\`;`,
    icone: <FaLayerGroup size={20} />,
    exemplo: <Botao primary>Original</Botao>
  }
];