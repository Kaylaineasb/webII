import { useState } from "react";
import {
  Container,
  Wrapper,
  InputGroup,
  Input,
  Button,
  ListaAparelhos,
  Ul
} from "./GestaoPesosStyle";
import { Menu,
    MenuLinks,
    MenuLogo} from "../Teste/TesteStyle"
import Logo from "../../assets/logo.jpeg";

const GestaoPesosProgresso = () => {
  const [aparelhos, setAparelhos] = useState([]);
  const [registro, setRegistro] = useState({
    aparelho: "",
    pesoAtual: "",
    metaPeso: "",
    series: "",
    repeticoes: ""
  });

  const adicionarRegistro = () => {
    if (registro.aparelho && registro.pesoAtual && registro.metaPeso) {
      setAparelhos([...aparelhos, registro]);
      setRegistro({ aparelho: "", pesoAtual: "", metaPeso: "", series: "", repeticoes: "" });
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
        <h2>Gestão de Pesos e Progresso</h2>
        <InputGroup>
          <Input
            type="text"
            placeholder="Nome do Aparelho"
            value={registro.aparelho}
            onChange={(e) => setRegistro({ ...registro, aparelho: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Peso Atual (kg)"
            value={registro.pesoAtual}
            onChange={(e) => setRegistro({ ...registro, pesoAtual: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Meta de Peso (kg)"
            value={registro.metaPeso}
            onChange={(e) => setRegistro({ ...registro, metaPeso: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Número de Séries"
            value={registro.series}
            onChange={(e) => setRegistro({ ...registro, series: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Número de Repetições"
            value={registro.repeticoes}
            onChange={(e) => setRegistro({ ...registro, repeticoes: e.target.value })}
          />
          <Button onClick={adicionarRegistro}>Salvar</Button>
        </InputGroup>
        <ListaAparelhos>
          <Ul>
            {aparelhos.map((item, index) => (
              <li key={index}>
                <strong>{item.aparelho}</strong>: {item.pesoAtual} kg → Meta: {item.metaPeso} kg ({item.series}x{item.repeticoes})
              </li>
            ))}
          </Ul>
        </ListaAparelhos>
      </Wrapper>
    </Container>
  );
};

export default GestaoPesosProgresso;
