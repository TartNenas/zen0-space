import React from 'react';
import styled from 'styled-components';
import Container from './styled/Container';
import Button from './styled/Button';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <StyledHero id="home">
      <Container>
        <HeroContent>
          <TextContent>
            <Greeting>Hello, I'm</Greeting>
            <Name>Khairul Anuar</Name>
            <Title>Full Stack Developer</Title>
            <Description>
              I build exceptional digital experiences with modern technologies.
              Passionate about creating clean, efficient, and user-friendly applications from Malaysia.
            </Description>
            <ButtonGroup>
              <Button $primary $large>View My Work</Button>
              <Button $secondary $large>Contact Me</Button>
            </ButtonGroup>
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
          </TextContent>
          <ImageContainer>
            <ProfileImage src="/images/Code Side.JPG" alt="Khairul Anuar - Full Stack Developer" />
          </ImageContainer>
        </HeroContent>
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  margin-right: ${props => props.theme.spacing.xxl};
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    margin-right: 0;
    margin-top: ${props => props.theme.spacing.xxl};
  }
`;

const Greeting = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
  line-height: 1.1;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.xlarge};
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
  max-width: 600px;
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.textLight};
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    justify-content: center;
  }
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
  }
`;

export default Hero;