import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: row;
  justify-content: center;
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;
export const ButtonTCell = styled.button`
  width: 100px;
  height: 38px;
  background-color: transparent;
  outline: none;
  border: 1px solid #262727;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #262727;
  font-family: "roboto";
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 600px;
`;

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #262727;
  font-family: "roboto";
`;

export const InputContainer = styled.div`
  border: 1px solid #262727;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  width: 280px;
  height: 35px;
  border-radius: 16px;
`;

export const Input = styled.input`
  font-size: 15px;
  font-weight: 500;
  color: #262727;
  font-family: "roboto";
  outline: none;
  border: none;
  margin-left: 10px;
`;

export const TableContainer = styled.div`
  border: 1px solid #262727;
`;
export const PagenationConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
