import styled from "styled-components";

export const Recommendations = styled.div`
  width:354px;
  height:374px;
  background-color: #E2DFDF;
  border-radius: 10px;
  padding:0 20px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  padding: 25px 0;
`

export const RecommendationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  > div {
    margin-bottom: 20px;
  }
`;