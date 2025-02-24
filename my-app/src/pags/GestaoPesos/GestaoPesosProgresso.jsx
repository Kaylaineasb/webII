import { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  InputGroup,
  Input,
  Button,
  ListaAparelhos,
  Select,
  Ul,
} from "./GestaoPesosStyle";
import { Menu, MenuLinks, MenuLogo } from "../Teste/TesteStyle";
import Logo from "../../assets/logo.jpeg";
import axios from "axios";

const GestaoPesosProgresso = () => {
  const [aparelhos, setAparelhos] = useState([]);
  const [registro, setRegistro] = useState({
    aparelho: "",
    pesoAtual: "",
    metaPeso: "",
    series: "",
    repeticoes: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/aparelhos") // Ajuste a URL conforme necessário
      .then((response) => {
        setAparelhos(response.data); // Supondo que o backend retorna um array de objetos { id, nome }
      })
      .catch((error) => {
        console.error("Erro ao buscar aparelhos:", error);
      });
  }, []);

  const adicionarRegistro = () => {
    if (registro.aparelho && registro.pesoAtual && registro.metaPeso) {
      setAparelhos([...aparelhos, registro]);
      setRegistro({
        aparelho: "",
        pesoAtual: "",
        metaPeso: "",
        series: "",
        repeticoes: "",
      });
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
          <Select
            value={registro.aparelho}
            onChange={(e) =>
              setRegistro({ ...registro, aparelho: e.target.value })
            }
          >
            <option value="">Selecione um aparelho</option>
            {aparelhos.map((aparelho) => (
              <option key={aparelho.id} value={aparelho.nome}>
                {aparelho.nome}
              </option>
            ))}
          </Select>
          <Input
            type="number"
            placeholder="Peso Atual (kg)"
            value={registro.pesoAtual}
            onChange={(e) =>
              setRegistro({ ...registro, pesoAtual: e.target.value })
            }
          />
          <Input
            type="number"
            placeholder="Meta de Peso (kg)"
            value={registro.metaPeso}
            onChange={(e) =>
              setRegistro({ ...registro, metaPeso: e.target.value })
            }
          />
          <Input
            type="number"
            placeholder="Número de Séries"
            value={registro.series}
            onChange={(e) =>
              setRegistro({ ...registro, series: e.target.value })
            }
          />
          <Input
            type="number"
            placeholder="Número de Repetições"
            value={registro.repeticoes}
            onChange={(e) =>
              setRegistro({ ...registro, repeticoes: e.target.value })
            }
          />
          <Button onClick={adicionarRegistro}>Salvar</Button>
        </InputGroup>
        <ListaAparelhos>
          <Ul>
            {aparelhos.map((item, index) => (
              <li key={index}>
                <strong>{item.aparelho}</strong>: {item.pesoAtual} kg → Meta:{" "}
                {item.metaPeso} kg ({item.series}x{item.repeticoes})
              </li>
            ))}
          </Ul>
        </ListaAparelhos>
      </Wrapper>
    </Container>
  );
};

export default GestaoPesosProgresso;
