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
      .get("http://localhost:5035/api/aparelhos")
      .then((response) => {
        setAparelhos(response.data); // Array de objetos { id, nome }
      })
      .catch((error) => {
        console.error("Erro ao buscar aparelhos:", error);
      });
  }, []);

  const adicionarRegistro = () => {
    const usuarioId = localStorage.getItem("usuarioId");
    if (!usuarioId) {
      alert("Usuário não encontrado no localStorage");
      return;
    }

    const aparelhoSelecionado = aparelhos.find(
      (aparelho) => aparelho.nome === registro.aparelho
    );

    if (!aparelhoSelecionado) {
      alert("Selecione um aparelho válido.");
      return;
    }

    if (registro.pesoAtual && registro.metaPeso && registro.series && registro.repeticoes) {
      const payload = {
        usuarioIdFk: Number(usuarioId),
        aparelhoIdFk: aparelhoSelecionado.id,
        pesoAtual: Number(registro.pesoAtual),
        pesoMeta: Number(registro.metaPeso),
        nrSeries: Number(registro.series),
        nrRepeticoes: Number(registro.repeticoes),
      };

      axios
        .post("http://localhost:5035/api/usuarios-aparelhos", payload)
        .then(() => {
          alert("Registro salvo com sucesso!");
          setRegistro({
            aparelho: "",
            pesoAtual: "",
            metaPeso: "",
            series: "",
            repeticoes: "",
          });
        })
        .catch((error) => {
          console.error("Erro ao salvar o registro:", error);
        });
    } else {
      alert("Preencha todos os campos.");
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
            onChange={(e) => setRegistro({ ...registro, aparelho: e.target.value })}
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
                <strong>{item.nome}</strong>
              </li>
            ))}
          </Ul>
        </ListaAparelhos>
      </Wrapper>
    </Container>
  );
};

export default GestaoPesosProgresso;
