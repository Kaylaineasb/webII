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
import { useState,useEffect } from "react";
import Logo from '../../assets/logo.jpeg';
import { useNavigate } from "react-router-dom";

const Teste = () => {
  const [aparelhos, setAparelhos] = useState([]);
  const [novoAparelho, setNovoAparelho] = useState({ nome: "", categoria: "" });
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const categorias = ["Superiores", "Inferiores", "Cardio"];

  useEffect(() => {
    // Verifica se o token está presente no localStorage
    const token = localStorage.getItem("token");

    // if (!token) {
    //   // Se não encontrar o token, redireciona para a tela de login
    //   navigate("/");
    // }
    // // Recupera o nome do usuário do localStorage
    const nomeUsuario = localStorage.getItem("usuario");
    if (nomeUsuario) {
      setUsuario(nomeUsuario); // Atualiza o estado com o nome do usuário
    }
  }, [navigate]);

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
        {usuario && <h3>Oi, {usuario}, Bem vindo de volta!</h3>}
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
