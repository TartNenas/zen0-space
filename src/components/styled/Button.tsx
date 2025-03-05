import styled, { css } from 'styled-components';

interface ButtonProps {
  $primary?: boolean;
  $secondary?: boolean;
  $large?: boolean;
  $small?: boolean;
  $fullWidth?: boolean;
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.fontSizes.regular};
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius.regular};
  border: none;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.small};
  outline: none;
  
  ${props => props.$primary && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
      box-shadow: ${props => props.theme.shadows.medium};
    }
  `}
  
  ${props => props.$secondary && css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    
    &:hover {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.light};
    }
  `}
  
  ${props => props.$large && css`
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
    font-size: ${props => props.theme.fontSizes.medium};
  `}
  
  ${props => props.$small && css`
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.fontSizes.small};
  `}
  
  ${props => props.$fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button; 