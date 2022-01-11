import styled from "styled-components";

export const Button = styled.div`
  width: 100%;
  letter-spacing: 0;
  line-height: 23px;
  text-align: center;
  padding: 0.8em 0;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  border: 1px solid;
  color: ${(params) => params?.theme?.colors.whitefff};
  background-color: ${(params) => params?.theme?.colors.maincolor};
  height: 20px;
`;