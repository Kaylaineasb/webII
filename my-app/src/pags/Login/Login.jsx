import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Container, Title, LoginBox, LeftSide, RightSide, Input, Button, FormWrapper } from './LoginStyle';
import logo from '../../assets/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5035/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email, // Alterado para email
          senha: data.senha // Alterado para senha
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Erro ao fazer login");
      }

      const result = await response.json();
      localStorage.setItem("token", result.token);
      localStorage.setItem("usuario", result.nome); 
      localStorage.setItem("usuarioId",result.usuarioId);

      navigate("/teste"); // Redireciona para a página principal
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <LoginBox>
        <LeftSide>
          <img src={logo} alt="Logo" width="300" />
        </LeftSide>
        <RightSide>
          <Title>Login</Title>
          <FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input type="email" placeholder="E-mail" {...register('email')} required />
              <Input type="password" placeholder="Senha" {...register('senha')} required />
              <Button type="submit">Entrar</Button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </FormWrapper>
          <p> Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui!</Link> </p>
        </RightSide>
      </LoginBox>
    </Container>
  );
};

export default Login;
