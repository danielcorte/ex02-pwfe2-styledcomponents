import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { WhatIsComponent } from "../components/whatIsComponent";
import { CardCaracteristicas } from "../components/cardCaracteristicas";
import logo from "../images/favicon.png";
import topico1 from "../images/topico1.png";
import topico2 from "../images/topico2.png";
import topico3 from "../images/topico3.png";
import topico4 from "../images/topico4.png";
import topico5 from "../images/topico5.png";
import topico6 from "../images/topico6.png";
import topico7 from "../images/topico7.png";
import topico8 from "../images/topico8.png";
import { FaCode, FaCogs, FaPalette, FaLayerGroup, FaBars, FaTimes } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";

const theme = {
  colors: {
    primary: "#1A2A80",
    secondary: "#3B38A0",
    accent: "#465C88",
    textLight: "#fff",
    textDark: "#333",
    background: "#fdfdfd",
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
  },
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  overflow-x: hidden;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 16px 48px;
  }
`;

const LogoLink = styled.a``;

const Imagem = styled.img`
  width: 48px;
  height: auto;
  border-radius: 8px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    flex-direction: row;
    height: auto;
    width: auto;
    background: transparent;
    transform: translateX(0);
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  padding: 4px 0;
  transition: all 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 11;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 80px 40px;
  }
`;

const CardsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: -100px;
  position: relative;
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: stretch;
    gap: 30px;
  }
`;

const CardsWhatIs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1A2A80;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const GridCarac = styled.div`
  display: grid;
  gap: 20px; 
  width: 100%;
  max-width: 1200px;
  grid-template-columns: 1fr; 

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardComando = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 550px;
  margin-bottom: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: calc(50% - 20px);
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
  font-weight: 300;
`;

const Codigo = styled.pre`
  background-color: #7A85C1;
  color: #333;
  padding: 12px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 14px;
  margin: 12px 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Botao = styled.button`
  background-color: ${({ primary, theme }) => (primary ? theme.colors.primary : "#000")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cards = [
    { id: 1, icon: <FaCode color="#fff" size={40} />, texto: "Styled Components é uma biblioteca para React que permite escrever estilos CSS diretamente dentro do JavaScript (CSS-in-JS), tornando o código mais organizado e modular." },
    { id: 2, icon: <BiLayer color="#fff" size={40} />, texto: "Cria estilos únicos para cada componente, evitando conflitos de CSS. Permite usar props para alterar dinamicamente os estilos de forma simples e intuitiva." },
    { id: 3, icon: <MdDesignServices color="#fff" size={40} />, texto: "Oferece suporte a temas, escopo automático de CSS e ótima integração com ferramentas modernas. É uma solução elegante para estilizar aplicações React." }
  ];

  const caracteristicas = [
    { id: 1, titulo: "🧩 CSS-in-JS", descricao: "Escreva estilos diretamente no seu código JavaScript/React.", img: topico1 },
    { id: 2, titulo: "🧼 Escopo Automático", descricao: "Estilos locais que evitam conflitos globais.", img: topico2 },
    { id: 3, titulo: "🎯 Props Condicionais", descricao: "Altere estilos dinamicamente com base nas props.", img: topico3 },
    { id: 4, titulo: "🎨 Suporte a Temas", descricao: "Use temas globais para consistência em toda a aplicação.", img: topico4 },
    { id: 5, titulo: "♻️ Componentes Reutilizáveis", descricao: "Crie componentes de estilo para reuso com consistência visual.", img: topico5 },
    { id: 6, titulo: "🔗 Composição de Estilos", descricao: "Estenda ou modifique componentes sem duplicar código.", img: topico6 },
    { id: 7, titulo: "⚙️ Integração com TypeScript", descricao: "Tipagem para props e temas, tornando o dev mais seguro.", img: topico7 },
    { id: 8, titulo: "🛠️ Organização de Código", descricao: "Estilizar junto ao componente melhora a leitura e manutenção.", img: topico8 },
  ];

  const comandosStyled = [
      { titulo: "styled.element", descricao: "Cria componentes estilizados a partir de elementos HTML.", codigo: `const Botao = styled.button\`;`, icone: <FaCode size={20} />, exemplo: <Botao>Normal</Botao>},
      { titulo: "Props", descricao: "Use props para alterar estilos dinamicamente.", codigo: `const Botao = styled.button\`\n  background: \${props => props.primary ? 'blue' : 'gray'};\n\`;`, icone: <FaCogs size={20} />, exemplo: <><Botao>Normal</Botao><Botao primary>Primário</Botao></>},
      { titulo: "ThemeProvider", descricao: "Define temas globais para todo o projeto.", codigo: `<ThemeProvider theme={meuTema}>...`, icone: <FaPalette size={20} />},
      { titulo: "Estender Estilos", descricao: "Cria novos componentes reaproveitando estilos existentes.", codigo: `const BotaoPrimario = styled(Botao)\`... \`;`, icone: <FaLayerGroup size={20} />},
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <LogoLink href="#topo"><Imagem src={logo} alt="Logo" /></LogoLink>
          <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes color="#fff" size={24} /> : <FaBars color="#fff" size={24} />}
          </MenuToggle>
          <Nav open={menuOpen}>
            <NavLink href="#oque" onClick={() => setMenuOpen(false)}>O que é?</NavLink>
            <NavLink href="#caracteristicas" onClick={() => setMenuOpen(false)}>Características</NavLink>
            <NavLink href="#comandos" onClick={() => setMenuOpen(false)}>Comandos</NavLink>
          </Nav>
        </Header>

        <MainSection id="oque">
          <WhatIsComponent />
          <CardsSection>
            {cards.map((card) => (
              <CardsWhatIs key={card.id}>
                {card.icon}
                <p style={{marginTop: '15px'}}>{card.texto}</p>
              </CardsWhatIs>
            ))}
          </CardsSection>
        </MainSection>

        <MainSection id="caracteristicas">
          <SectionTitle>Características do Styled Component</SectionTitle>
          <GridCarac>
            {caracteristicas.map((carac) => (
              <CardCaracteristicas key={carac.id} {...carac} />
            ))}
          </GridCarac>
        </MainSection>

        <MainSection id="comandos">
          <SectionTitle>Principais Comandos</SectionTitle>
          {comandosStyled.map((item, index) => (
            <CardComando key={index}>
              <CardTitulo>{item.icone} {item.titulo}</CardTitulo>
              <CardDescricao>{item.descricao}</CardDescricao>
              <Codigo>{item.codigo}</Codigo>
              {item.exemplo}
            </CardComando>
          ))}
        </MainSection>

      </Container>
    </ThemeProvider>
  );
};