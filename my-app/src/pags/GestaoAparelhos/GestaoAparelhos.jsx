import { useState } from "react";
import { Container,LeftPanel,Logo,RightPanel,InputGroup,Input,Select,Button,ListaAparelhos,Ul, Categoria } from "./GestaoAparelhos";
function GestaoAparelhos  () {
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
        <LeftPanel>
          <Logo src="/logo.png" alt="Logo" />
        </LeftPanel>
        <RightPanel>
          <h2>Gestão de Aparelhos</h2>
          <InputGroup>
            <Input
              type="text"
              placeholder="Nome do aparelho"
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
          </ListaAparelhos>
        </RightPanel>
      </Container>
    );
  };
  
  export default GestaoAparelhos;
  