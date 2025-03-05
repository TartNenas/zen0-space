import styled from 'styled-components';

interface SectionProps {
  $dark?: boolean;
  $light?: boolean;
  $accent?: boolean;
  $noPadding?: boolean;
  $smallPadding?: boolean;
}

const Section = styled.section<SectionProps>`
  padding: ${props => props.theme.spacing.xxl} 0;
  position: relative;
  
  ${props => props.$dark && `
    background-color: ${props.theme.colors.dark};
    color: ${props.theme.colors.light};
  `}
  
  ${props => props.$light && `
    background-color: ${props.theme.colors.light};
    color: ${props.theme.colors.dark};
  `}
  
  ${props => props.$accent && `
    background-color: ${props.theme.colors.accent};
  `}
  
  ${props => props.$noPadding && `
    padding: 0;
  `}
  
  ${props => props.$smallPadding && `
    padding: ${props.theme.spacing.lg} 0;
  `}
`;

export default Section; 