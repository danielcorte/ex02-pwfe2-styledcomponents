export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Seus arrays de dados (cards, caracteristicas, comandosStyled) aqui

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <LogoLink href="#topo">
            <Imagem src={logo} alt="Logo" />
          </LogoLink>
          
          <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes color="#fff" size={24} /> : <FaBars color="#fff" size={24} />}
          </MenuToggle>

          <Nav open={menuOpen}>
            <NavLink href="#oque" onClick={() => setMenuOpen(false)}>O que é?</NavLink>
            <NavLink href="#caracteristicas" onClick={() => setMenuOpen(false)}>Características</NavLink>
            <NavLink href="#comandos" onClick={() => setMenuOpen(false)}>Comandos</NavLink>
          </Nav>
        </Header>

        <WhatIs id="oque">
          <WhatIsComponent />
          <CardsSection>
            {cards.map((card) => (
              <CardsWhatIs key={card.id}>
                {card.icon}
                <TextWhatIs>{card.texto}</TextWhatIs>
              </CardsWhatIs>
            ))}
          </CardsSection>
        </WhatIs>

        <SectionTitle id="caracteristicas">Características Styled Component</SectionTitle>
        <GridCarac>
          {caracteristicas.map((carac) => (
            <CardCaracteristicas key={carac.id} titulo={carac.titulo} descricao={carac.descricao} img={carac.img} />
          ))}
        </GridCarac>

        <SectionTitle id="comandos">Principais Comandos</SectionTitle>
        <SecaoComandos>
          {comandosStyled.map((item, index) => (
            <CardComando key={index}>
              {/* Conteúdo do seu card de comando aqui */}
            </CardComando>
          ))}
        </SecaoComandos>
      </Container>
    </ThemeProvider>
  );
};