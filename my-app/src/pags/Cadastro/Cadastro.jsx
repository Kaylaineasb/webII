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
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(""); // Estado para exibir erros da API
    const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:4200", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar. Verifique os dados e tente novamente.");
      }

      const result = await response.json();
      console.log("Resposta do backend:", result); 
      alert("Cadastro realizado com sucesso! Faça login para continuar.");
      navigate("/login"); // Redireciona para a tela de login
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
                placeholder="Usuário"
                {...register("username")}
                required
              />
              <Input
  type="email"
  placeholder="E-mail"
  {...register("email", {
    required: "O e-mail é obrigatório",  // Verifica se o campo foi preenchido
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // Expressão regular para validar o formato do e-mail
      message: "Por favor, insira um e-mail válido"  // Mensagem de erro para e-mail inválido
    }
  })}
  required
/>
{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
             <Input 
          type="password" 
          placeholder="Senha" 
          {...register("password", {
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
        {errors.password &&  <ErrorMessage>{errors.password.message}</ErrorMessage>} {/* Exibe o feedback de erro */}
              <Button type="submit">Cadastrar</Button>
            </form>
          </FormWrapper>
        </RightSide>
      </LoginBox>
    </Container>
  );
}

export default Cadastro;
