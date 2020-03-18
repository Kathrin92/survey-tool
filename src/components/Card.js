import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 25px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  height: 180px;
  color: ${props => props.theme.colors.textPrimary};
  justify-content: center;
`;

export default Card;
