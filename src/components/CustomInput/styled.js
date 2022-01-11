import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Label = styled.div`
  font-family: "Roboto" , sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const HelpText = styled.span`
  font-family: "Roboto-Medium";
  font-size: 14px;
  margin-left: 5px;
`;

export const InputContainer = styled.div`
  font-family: "Roboto";
  padding: 16px;
  background-color: ${(props) => props.theme?.colors?.whitefff};
  border: ${(props) => "solid 1px " + props.theme.colors.gray};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: textfield;
  width: 100%;
  margin-right: 5px;
  font-size: 14px;
  background-color: transparent;
  color: #212529;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Error = styled.span`
  color: ${(params) => params?.theme?.colors.redff6};
  font-family: "Roboto-Medium";
  font-size: 12px;
  font-weight: 500;
`;

