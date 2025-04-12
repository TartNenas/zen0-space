import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Container from './styled/Container';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

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

  useEffect(() => {
    // Check if there's a hash in the URL when the page loads
    if (location.hash) {
      // Delay to ensure all elements are rendered
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    // Only handle scrolling if we're already on the home page
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after clicking
        setIsMobileMenuOpen(false);
        // Update URL without page reload
        window.history.pushState(null, '', `/#${id}`);
      }
    } else {
      // We're not on the home page, so let the Link component handle navigation
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <StyledHeader $isScrolled={isScrolled}>
      <Container>
        <NavWrapper>
          <Logo>kanuar</Logo>
          
          <HamburgerButton onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
          
          <NavMenu $isOpen={isMobileMenuOpen}>
            <NavItem>
              <NavLink to="/" onClick={(e) => handleNavClick(e, 'home')}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/privacy">Privacy</NavLink>
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

const NavLink = styled(Link)`
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