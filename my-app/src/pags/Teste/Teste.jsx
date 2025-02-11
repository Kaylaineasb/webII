import { Button, Container, Input, InputGroup, ListaAparelhos, Select, Categoria, Ul, Menu, MenuLinks, MenuLogo, Wrapper } from "./Teste";
import { useState } from "react";
import Logo from '../../assets/logo.jpeg';

const Teste = () => {
  const [aparelhos, setAparelhos] = useState([]);
  const [novoAparelho, setNovoAparelho] = useState({ nome: "", categoria: "" });
  const categorias = ["Superiores", "Inferiores", "Cardio"];

  const adicionarAparelho = () => {
    if (novoAparelho.nome && novoAparelho.categoria) {
      setAparelhos([...aparelhos, novoAparelho]);
      setNovoAparelho({ nome: "", categoria: "" });
    }
  };

  return (
    <Container>
      <Menu>
        <MenuLinks>
          <a href="#">Início</a>
          <a href="#">Gestão de Aparelhos</a>
          <a href="#">Gestão de Treinos</a>
        </MenuLinks>
        <MenuLogo src={Logo} alt="Logo" />
      </Menu>
      <Wrapper>
        <h2>Gestão de Aparelhos</h2>
        <InputGroup>
          <Input
            type="text"
            placeholder="Nome do Aparelho"
            value={novoAparelho.nome}
            onChange={(e) => setNovoAparelho({ ...novoAparelho, nome: e.target.value })}
          />
          <Select
            value={novoAparelho.categoria}
            onChange={(e) => setNovoAparelho({ ...novoAparelho, categoria: e.target.value })}
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Select>
          <Button onClick={adicionarAparelho}>Adicionar</Button>
        </InputGroup>
        <ListaAparelhos>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", width: "100%" }}>
            {categorias.map((categoria) => (
              <Categoria key={categoria}>
                <h3>{categoria}</h3>
                <Ul>
                  {aparelhos.filter(a => a.categoria === categoria).map((aparelho, index) => (
                    <li key={index}>{aparelho.nome}</li>
                  ))}
                </Ul>
              </Categoria>
            ))}
          </div>
        </ListaAparelhos>
      </Wrapper>
    </Container>
  );
};

export default Teste;
