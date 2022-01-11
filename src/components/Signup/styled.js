import styled from "styled-components";

export const Sigup = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme?.colors?.whitefff};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 32px 25px;
  width: 350px;
  z-index: 2;
  border: 1px solid rgba(0,0,0);
`;

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  text-align: center;/
  font-weight: bold;
`;

export const InputContainer = styled.div`
  margin-top: 31px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-top: 31px;
  text-align: right;
  width: 100%;
  :hover {
    div {
      background-color: ${props => props.theme.colors.seconcolor};
      transition: 0.4s;
      opacity: 1;
    }
  }
`;

export const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
`;

export const ToLogin = styled.div`
  color: ${props => props.theme.colors.maincolor};
  font-family: "Roboto" , sans-serif;
  padding: 10px;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.colors.seconcolor};
    transition: 0.4s;
    opacity: 1;
  }
`;
