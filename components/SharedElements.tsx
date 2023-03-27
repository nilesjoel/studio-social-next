import styled from "styled-components";
import { roboto, glory, hachi, poppins, raleway } from '../styles/fonts';

interface ButtonProps {
    primary: boolean;
    fontBig?: boolean;
  }
const Button = styled.button<ButtonProps>`
${glory.style}
  background: ${({ theme, primary, fontBig }) => primary 
    ? theme.colors.secondaryDark
    : theme.colors.primaryColor};

  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: ${({ fontBig }) => fontBig ? '5rem' : '2rem'};
//   margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 3px;
  `;



  const Typography = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 3px;
    `;

  export {Button, Typography};