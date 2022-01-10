import styled from "styled-components";

export const Post = styled.div`
  background-color: #E2DFDF;
  border-radius: 10px;
  width: 689px;
  min-height:307px;
  height: fit-content;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 40px;
`;

export const MainInfo = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-text: center;
  justify-content: center;
  padding: 0px;

`;

export const NameProfile = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
`;

export const IconType = styled.div`
  font-size: 24px;
  text-align: center;
`;

export const ContentTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
`;
export const UserInfo = styled.div`
  align-self: center;
`;

export const ContentReview = styled.div`
  padding: 15px;
`;

export const MainReview = styled.div`
  width:481px;
  min-height: 258px;
  height:fit-content;
  background-color:#E5E4EE;
  padding: 15px;
  box-sizing: border-box;
`;

export const ReviewTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`;

export const ReviewText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: justify;
`;