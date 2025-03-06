import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from './styled/Container';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <StyledHeader $isScrolled={isScrolled}>
      <Container>
        <NavWrapper>
          <Logo>zen0</Logo>
          
          <HamburgerButton onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
          
          <NavMenu $isOpen={isMobileMenuOpen}>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </NavMenu>
        </NavWrapper>
      </Container>
    </StyledHeader>
  );
};

interface StyledHeaderProps {
  $isScrolled: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: ${props => props.$isScrolled ? props.theme.spacing.sm : props.theme.spacing.md} 0;
  transition: all ${props => props.theme.transitions.normal};
  background-color: ${props => props.$isScrolled ? props.theme.colors.light : 'transparent'};
  box-shadow: ${props => props.$isScrolled ? props.theme.shadows.small : 'none'};
  backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.primary};
`;

interface NavMenuProps {
  $isOpen: boolean;
}

const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  list-style: none;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    max-width: 300px;
    flex-direction: column;
    background-color: ${props => props.theme.colors.light};
    box-shadow: ${props => props.theme.shadows.large};
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform ${props => props.theme.transitions.normal};
    z-index: 200;
  }
`;

const NavItem = styled.li`
  margin-left: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const NavLink = styled.a`
  font-size: ${props => props.theme.fontSizes.regular};
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 300;
  
  span {
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.colors.text};
    border-radius: 10px;
    transition: all ${props => props.theme.transitions.fast};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export default Header;