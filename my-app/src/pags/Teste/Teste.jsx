import axios from "axios";
import {
  Button,
  Container,
  Input,
  InputGroup,
  ListaAparelhos,
  Select,
  Categoria,
  Ul,
  Menu,
  MenuLinks,
  MenuLogo,
  Wrapper
} from "./TesteStyle";
import { useState, useEffect } from "react";
import Logo from '../../assets/logo.jpeg';
import { useNavigate, Link } from "react-router-dom";

const Teste = () => {
  const [aparelhos, setAparelhos] = useState([]);
  const [novoAparelho, setNovoAparelho] = useState({ Nome: "", CategoriaId: "" });
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const categorias = ["Superiores", "Inferiores", "Cardio"];

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("usuario");
    if (nomeUsuario) {
      setUsuario(nomeUsuario);
    }
  }, [navigate]);

  const adicionarAparelho = async () => {
    const token = localStorage.getItem("token");
    if (novoAparelho.Nome && novoAparelho.categoria) {
      // Mapeando a categoria de string para número
      const categoriaIndex = categorias.indexOf(novoAparelho.categoria);
      if (categoriaIndex !== -1) {
        novoAparelho.categoria = categoriaIndex + 1; // Convertendo para número
      }

      try {
        const payload = {
          Nome: novoAparelho.Nome,
          CategoriaId: novoAparelho.categoria // Usando o valor numérico
        };
         // Verificando se o ID da categoria foi mapeado corretamente

        const response = await axios.post("http://localhost:5035/api/aparelhos", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Opcional, mas recomendado
          },
        });

        // Atualizando a lista de aparelhos após sucesso
        setAparelhos([...aparelhos, response.data]);
        setNovoAparelho({ Nome: "", CategoriaId: "" }); // Resetando o estado após adicionar
      } catch (error) {
        console.error("Erro ao adicionar aparelho:", error);
      }
    }
    alert("Aparelho Cadastrado Com sucesso");
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
        <h2>Gestão de Aparelhos</h2>
        {usuario && <h3>Oi, {usuario}, Bem-vindo de volta!</h3>}
        <InputGroup>
          <Input
            type="text"
            placeholder="Nome do Aparelho"
            value={novoAparelho.Nome}
            onChange={(e) => setNovoAparelho({ ...novoAparelho, Nome: e.target.value })}
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
