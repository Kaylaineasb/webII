import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftPanel = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const RightPanel = styled.div`
  width: 50%;
  background: black;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;
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
  padding: 10px;
  border-radius: 5px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ListaAparelhos = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
`;

export const Categoria = styled.div`
  margin-bottom: 20px;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
