import React from 'react';
import styled from 'styled-components';
import Container from './styled/Container';
import Section from './styled/Section';
import Button from './styled/Button';
import { FaReact, FaJs, FaFire } from 'react-icons/fa';
import { SiFlutter, SiTailwindcss, SiNetlify, SiVercel, SiSupabase, SiTurso } from 'react-icons/si';

const About: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <SectionHeading>About Me</SectionHeading>
        <AboutContent>
          <AboutText>
            <p>
              Hello! I'm Khairul Anuar, a passionate full-stack developer from Malaysia with a strong focus on creating 
              intuitive and efficient web applications. With a background in computer science
              and several years of industry experience, I've had the opportunity to work on
              diverse projects ranging from mobile apps to data-intensive web applications.
            </p>
            <p>
              My technical expertise includes front-end technologies like React, React Native, and Flutter,
              as well as back-end development with Firebase, Supabase, and Turso. I'm always eager to learn 
              new technologies and approaches to problem-solving.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new design trends, contributing to 
              open-source projects, or enjoying outdoor activities. I believe in creating meaningful 
              technology that improves people's lives and makes the web a better place.
            </p>
            <SkillsContainer>
              <SkillsHeading>My Tech Stack</SkillsHeading>
              <TechStackGrid>
                <TechItem>
                  <TechIcon><FaReact /></TechIcon>
                  <TechName>React</TechName>
                </TechItem>
                <TechItem>
                  <TechIcon><FaReact /></TechIcon>
                  <TechName>React Native</TechName>
                </TechItem>
                <TechItem>
                  <TechIcon><FaJs /></TechIcon>
                  <TechName>JavaScript</TechName>
                </TechItem>
                <TechItem>
                  <TechIcon><SiFlutter /></TechIcon>
                  <TechName>Flutter</TechName>
                </TechItem>
                <TechItem>
                  <TechIcon><FaFire /></TechIcon>
                  <TechName>Firebase</TechName>
                </TechItem>
                <TechItem>
                  <TechIcon><SiSupabase /></TechIcon>
                  <TechName>Supabase</TechName>
                </TechItem>
                <TechItem>
                  <TechIcon><SiTurso /></TechIcon>
                  <TechName>Turso</TechName>
                </TechItem>
                <TechItem>
                  <TechIcon><SiTailwindcss /></TechIcon>
                  <TechName>Tailwind</TechName>
                </TechItem>
                <TechItem>
                  <TechIcon><SiNetlify /></TechIcon>
                  <TechName>Netlify</TechName>
                </TechItem>
                <TechItem>
                  <TechIcon><SiVercel /></TechIcon>
                  <TechName>Vercel</TechName>
                </TechItem>
              </TechStackGrid>
            </SkillsContainer>
            <Button $primary>Download Resume</Button>
          </AboutText>
          <AboutImageWrapper>
            <AboutImage src="/images/Code Back.JPG" alt="Khairul Anuar working on code" />
          </AboutImageWrapper>
        </AboutContent>
      </Container>
    </Section>
  );
};

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.xxlarge};
  position: relative;
  
  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background-color: ${props => props.theme.colors.primary};
    margin: ${props => props.theme.spacing.sm} auto 0;
    border-radius: 2px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xxl};
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.div`
  flex: 1;
  
  p {
    margin-bottom: ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.textLight};
    line-height: 1.7;
  }
`;

const SkillsContainer = styled.div`
  margin: ${props => props.theme.spacing.lg} 0;
`;

const SkillsHeading = styled.h3`
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.large};
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SkillItem = styled.li`
  list-style: none;
  position: relative;
  padding-left: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.regular};
  color: ${props => props.theme.colors.text};
  
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.primary};
  }
`;

const AboutImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutImage = styled.img`
  max-width: 100%;
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  border: 5px solid ${props => props.theme.colors.light};
`;

// Add these new styled components for the tech stack
const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TechIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const TechName = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
`;

export default About;