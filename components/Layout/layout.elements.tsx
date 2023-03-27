
import styled from "styled-components";
import { roboto, glory, hachi, poppins, raleway } from '../../styles/fonts';

const StyledLayout = styled.div`
    ${raleway.style}
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 320px;
  background:${({ theme }) => theme.colors.primaryColor};
`;

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primaryColor}
`;


export { StyledLayout, StyledMain }