import styled from "styled-components";

export const Tags = styled.div`
  background-color: ${props => props.theme.colors.squares};
  border-radius: 10px;
  width: 190px;
  height: 387px;
  padding: 15px;
  box-sizing: border-box;
`;


export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: normal;
`;

export const Type = styled.div`
  with: 10px;
  height:60px;
  margin: 10px 0;
  padding: 5px;
  box-sizing: border-box;
  display: flex;  
  cursor: pointer;
`;

export const Text  = styled.h1`
  font-size:18px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  margin-left:10px;
`;

export const Circle = styled.div`
  display: flex;
  background-color: ${props => props.col};
  font-size: 30px;
  color: blue;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  align-items: center;
  justify-content:center;
  color: #000;
`;