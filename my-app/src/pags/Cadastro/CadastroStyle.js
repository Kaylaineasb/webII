import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginBox = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
export const Title = styled.h2`
  align-self: flex-start;
  margin-bottom: 20px;
  font-size: 2.5rem;
`;
export const RightSide = styled.div`
  flex: 1;
  background: #000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  
  a{
    text-decoration:none;
    color: #d9534f;
     &:hover {
        color: #c9302c;
    }
  }
  
  
`;
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;



export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
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
    margin-top:30px;
  &:hover {
    background: #c9302c;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  font-weight: bold;
  margin:0;
  font-style: italic;
`;