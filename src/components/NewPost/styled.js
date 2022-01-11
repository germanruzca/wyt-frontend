import styled from "styled-components";

export const NewPost = styled.div`
  width: 550px;
  height: 500px;
  background-color: ${(props) => props.theme?.colors?.squares};
  border-radius: 10px;
  flex-direction: column;
  padding: 15px 32px 25px;
  width: 450px;
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

export const InputRating = styled.div`
   margin-top: 31px;
   width: 100%;
`;