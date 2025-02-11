import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  overflow:auto;

  h2{
    margin-bottom: 50px;
    color:#d9534f;
    text-weight:bold;
    text-transform:uppercase;
    font-size:56px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px 20px;
  color: black;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const MenuLinks = styled.div`
  display: flex;
  gap: 20px;
  
  a {
   text-decoration:none;
    color: #000;
     &:hover {
        color: #c9302c;
    }
  }
`;

export const MenuLogo = styled.img`
  width: 40px;
  margin-right: 30px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;
  justify-content:center;
  align-center:center;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #c9302c;
  }
`;

export const ListaAparelhos = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
`;

export const Categoria = styled.div`
  margin-bottom: 20px;
  background: #222;
  padding: 10px;
  border-radius: 5px;
  min-width: 150px;
  text-align: center;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
