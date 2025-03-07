import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;

  h2 {
    margin-bottom: 20px;
    color: #d9534f;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-top:100px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #333;
  color: white;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #333;
  color: white;
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

export const Table = styled.table`
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  background: #d9534f;
  color: white;
  padding: 10px;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #444;
  text-align: center;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background: #222;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;
  justify-content: center;
  align-items: center;
`;
export const ListaAparelhos = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  color: white;
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
`;

