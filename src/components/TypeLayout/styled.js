import styled from "styled-components";

export const Main =styled.div`
  background-color: #FFFFFF;
  width: 746px;
  min-height: 900px;
  height: fit-content;
  border-radius:10px;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const TypeInfo = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const CirclePicture = styled.div`
  border: 5px solid black;
  background-color: ${props => props.col};
  color: #000;
  height: 200px;
  width: 200px;
  border-radius: 100%;
  font-size:105px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TypeName = styled.h1`
  font-size:24px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
`;

export const TypeTotalReco = styled.h1`
  font-size:18px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
`;

export const TypeBio = styled.div`
  font-size:18px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  margin: 0 20px;
  text-align: center;
`
export const TextBio = styled.p`
  font-size:18px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  text-align: justify;
`;

export const RecoTitle = styled.h1`
  font-size:24px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

export const TypeReco = styled.div`
  width: 100%;
  height: fit-content;
  margin: 20px 0;
`;

