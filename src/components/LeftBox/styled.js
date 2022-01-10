import styled from "styled-components";

export const LeftBox = styled.div`
  background-color: #FFFFFF;
  width:356px;
  height:699px;
  border-radius: 10px;
  border: 1px solid #E2DFDF;
  padding: 10px;
  display: grid;
  grid-template-rows: 144px 118px 374px;
  align-content: space-around;
`;

export const ProfileContainer = styled.div`
  grid-row: 1/2;
`;

export const BioContainer = styled.div`
  grid-row: 2/3;
`;

export const RecommendationsContainer = styled.div`
  grid-row: 3/3;
  > div {
    background-color: #E2DFDF;
  }
`;