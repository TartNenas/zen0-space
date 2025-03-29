import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './styled/Container';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterLogo>zen0</FooterLogo>
          <FooterNav>
            <FooterNavItem>
              <FooterNavLink to="/">Home</FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink to="/#about">About</FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink to="/#projects">Projects</FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink to="/#skills">Skills</FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink to="/#contact">Contact</FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink to="/privacy">Privacy Policy</FooterNavLink>
            </FooterNavItem>
          </FooterNav>
          <SocialLinks>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
          <Copyright>
            © {currentYear} Khairul Anuar. All rights reserved. Designed with <HeartIcon><FaHeart /></HeartIcon>
          </Copyright>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  padding: ${props => props.theme.spacing.xl} 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.div`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const FooterNav = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
    align-items: center;
  }
`;

const FooterNavItem = styled.li``;

const FooterNavLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.light};
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.lightGray};
`;

const HeartIcon = styled.span`
  color: ${props => props.theme.colors.primary};
  margin: 0 ${props => props.theme.spacing.xs};
  display: inline-flex;
  align-items: center;
`;

export default Footer;