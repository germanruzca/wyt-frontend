import styled from "styled-components";

export const Stars = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  font-size: 25px;
  padding-top: 4px;
  
  `;

export const Star = styled.label`
color: ${props => props.ratingValue > (props.hover || props.rating) ? props.theme.colors.grayd2d2 :props.theme.colors.seconcolor };
  > input[type="radio"] {
    display:none;
  }
  > svg {
      padding-left: 5px;
      :hover {
        color: ${props => props.theme.colors.seconcolor}
      }

  }

  cursor: pointer;
`;