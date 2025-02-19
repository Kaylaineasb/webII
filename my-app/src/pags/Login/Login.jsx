import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Container, Title, LoginBox, LeftSide, RightSide, Input, Button, FormWrapper } from './LoginStyle';
import logo from '../../assets/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom'; 
const Login = () => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://192.168.189.127:5035/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Usuário ou senha inválidos");
      }

      const result = await response.json();
      localStorage.setItem("token", result.token); // Armazena o token
      navigate("/teste"); // Redireciona para a página principal
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <LoginBox>
        <LeftSide>
          <img src={logo} alt='Logo' width='300' />
        </LeftSide>
        <RightSide>
        <Title>Login</Title>
          <FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input type='text' placeholder='Email' {...register('email')} required/>
              <Input type='password' placeholder='Senha' {...register('senha')} required/>
              <Button type='submit'>Entrar</Button>
            </form>
          </FormWrapper>
          <p> Não tem uma conta?{' '}
          <Link to="/cadastro">Cadastre-se aqui!</Link> </p>
        </RightSide>
      </LoginBox>
    </Container>
  );
};

export default Login;
