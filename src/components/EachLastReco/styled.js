import styled from "styled-components";

export const MainBox = styled.div`
  width: 315px;
  height: 55px;
  border-radius: 10px;
  background-color: ${props => props.color};
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  margin:0;
  `;

export const StarsContainer = styled.div`
  width: 120px;
  align-self: center  ;
  padding: 5px 10px 10px 5px;
`;

export const Title = styled.h1`
  width: 200px;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis 
`;