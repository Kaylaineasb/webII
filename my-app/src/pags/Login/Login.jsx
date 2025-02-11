import { useForm } from 'react-hook-form';
import { Container, Title, LoginBox, LeftSide, RightSide, Input, Button, FormWrapper } from './LoginStyle';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom'; 
const Login = () => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
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
              <Input type='text' placeholder='Usuário' {...register('username')} required/>
              <Input type='password' placeholder='Senha' {...register('password')} required/>
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
