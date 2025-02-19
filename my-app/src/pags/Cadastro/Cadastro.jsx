import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  LoginBox,
  LeftSide,
  RightSide,
  Input,
  Button,
  FormWrapper,
  ErrorMessage
} from "./CadastroStyle";
import logo from "../../assets/logo.jpeg";

function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(""); // Estado para exibir erros da API
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5035/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.nome, 
          email: data.email,
          senha: data.senha 
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Erro ao cadastrar. Verifique os dados.");
      }
      localStorage.setItem("usuario", data.nome); 

      alert("Cadastro realizado com sucesso! Faça login para continuar.");
      navigate("/login"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <LoginBox>
        <LeftSide>
          <img src={logo} alt="Logo" width="300" />
        </LeftSide>
        <RightSide>
          <Title>Cadastro</Title>
          <FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                placeholder="Nome"
                {...register("nome", { required: "O nome é obrigatório" })}
              />
              {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

              <Input
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  required: "O e-mail é obrigatório",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Por favor, insira um e-mail válido"
                  }
                })}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

              <Input
                type="password"
                placeholder="Senha"
                {...register("senha", {
                  required: "A senha é obrigatória",
                  minLength: {
                    value: 8,
                    message: "A senha deve ter pelo menos 8 caracteres"
                  },
                  pattern: {
                    value: /(?=.*\d)/,
                    message: "A senha deve conter pelo menos um número"
                  }
                })}
              />
              {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}

              {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe erros do backend */}

              <Button type="submit">Cadastrar</Button>
            </form>
          </FormWrapper>
        </RightSide>
      </LoginBox>
    </Container>
  );
}

export default Cadastro;
