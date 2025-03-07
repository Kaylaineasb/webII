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
import { Link } from "react-router-dom";

const GestaoPesosProgresso = () => {
  const [aparelhos, setAparelhos] = useState([]);
  const [listaUsuariosAparelhos, setListaUsuariosAparelhos] = useState([]);
  const [registro, setRegistro] = useState({
    aparelho: "",
    pesoAtual: "",
    metaPeso: "",
    series: "",
    repeticoes: "",
  });

  useEffect(() => {
    const idUsuario = localStorage.getItem("usuarioId");
    const token = localStorage.getItem("token");
    if (!idUsuario) {
      console.error("Usuário não identificado.");
      return;
    }
    axios
      .get(`http://localhost:5035/api/usuarios-aparelhos/${idUsuario}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Passando o token no header da requisição
        },
      })
      .then((response) => {
        console.log(response.data);
        setListaUsuariosAparelhos(response.data); // Salva os aparelhos retornados na variável de estado
      })
      .catch((error) => {
        console.error("Erro ao buscar aparelhos do usuário:", error);
      });
    axios
      .get("http://localhost:5035/api/aparelhos")
      .then((response) => {
        console.log(response.data);
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
    //console.log(registro.aparelho)
    const aparelhoSelecionado = aparelhos.find(
      (aparelho) => aparelho.id == registro.aparelho
    );
    console.log(aparelhoSelecionado);
    if (!aparelhoSelecionado) {
      alert("Selecione um aparelho válido.");
      return;
    }

    if (
      registro.pesoAtual &&
      registro.metaPeso &&
      registro.series &&
      registro.repeticoes
    ) {
      const payload = {
        usuarioIdFk: Number(usuarioId),
        aparelhoIdFk: aparelhoSelecionado.id,
        pesoAtual: Number(registro.pesoAtual),
        pesoMeta: Number(registro.metaPeso),
        nrSeries: Number(registro.series),
        nrRepeticoes: Number(registro.repeticoes),
      };

      const token = localStorage.getItem("token");

      axios
        .post("http://localhost:5035/api/usuarios-aparelhos", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Opcional, mas recomendado
          },
        })
        .then(() => {
          alert("Registro salvo com sucesso!");
          window.location.reload();
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
          <Link to="/">Início</Link>
          <Link to="/teste">Gestão de Aparelhos</Link>
          <Link to="/gestaoPesos">Gestão de Treinos</Link>
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
              <option key={aparelho.id} value={aparelho.id}>
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
            {listaUsuariosAparelhos.length > 0 ? (
              listaUsuariosAparelhos.map((item, index) => (
                <li key={index}>
                  <strong>{item.nomeAparelho}</strong> <br />
                  <span>Peso Atual: {item.pesoAtual} kg</span> <br />
                  <span>Peso Meta: {item.pesoMeta} kg</span> <br />
                  <span>Séries: {item.nrSeries}</span> <br />
                  <span>Repetições: {item.nrRepeticoes}</span>
                </li>
              ))
            ) : (
              <p>Nenhum aparelho cadastrado para esse usuário.</p>
            )}
          </Ul>
        </ListaAparelhos>
      </Wrapper>
    </Container>
  );
};

export default GestaoPesosProgresso;
