import styled from "styled-components";

export const TextareaContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Textarea = styled.textarea`
  padding: 50px;
  padding: 16px;
  border: ${(props) => `solid 1px ${props.theme?.colors?.gray}`};
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  min-height: 70px;
  min-width: calc(100% - 32px);
  max-width: calc(100% - 32px);
  max-height: 100px;
  &:focus {
    outline: none;
  }
`;

export const Label = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Error = styled.span`
  color: ${(params) => params?.theme?.colors.redff6};
  font-family:"Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
`;
