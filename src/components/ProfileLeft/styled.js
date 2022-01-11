import styled from "styled-components";

export const ProfileLeft = styled.div`
  width: 354px;
  height: 144px;
  background-color: ${(params) => params?.theme?.colors.squares};
  border-radius: 10px;
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 110px;
  padding: 15px;
`;

export const InfomationContainer = styled.div`
  width: 244px;
  padding: 15px;
`;

export const NameProfile = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: normal;
`;

export const TotalReco = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: normal;
`;

export const UsernameProfile = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  /* font-weight: normal; */
`;