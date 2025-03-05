import React from 'react';
import styled from 'styled-components';
import Container from './styled/Container';
import Section from './styled/Section';
import Button from './styled/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Payvo',
    description: 'An easy-to-use invoicing web application designed for freelancers and small businesses. Create, manage, and send professional invoices with a clean, intuitive interface.',
    image: '/images/payvo-zen0.png',
    tags: ['React', 'TypeScript', 'Styled Components', 'Invoice Management'],
    githubLink: 'https://github.com',
    liveLink: 'https://payvo.zen0.space',
  },
  {
    id: 2,
    title: 'Todo Web App',
    description: 'An open-source todo application built for productivity and collaboration. Features include task management, categories, and priority settings. Contributions welcome!',
    image: '/images/todo-zen0.png',
    tags: ['React', 'Open Source', 'Task Management', 'Collaboration'],
    githubLink: 'https://github.com/TartNenas/Todo-WebApp',
    liveLink: 'https://todo.zen0.space',
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" $accent>
      <Container>
        <SectionHeading>My Projects</SectionHeading>
        <ProjectGrid>
          {projects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImageContainer>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectOverlay>
                  <ProjectLinks>
                    <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </ProjectLink>
                    <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectOverlay>
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
        <MoreProjectsButton>
          <Button $primary>View More Projects</Button>
        </MoreProjectsButton>
      </Container>
    </Section>
  );
};

// This is your new centered grid styling
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 450px));
  gap: ${props => props.theme.spacing.xl};
  justify-content: center;
  
  @media (max-width: 900px) {
    grid-template-columns: minmax(350px, 450px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.borderRadius.regular};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform ${props => props.theme.transitions.normal}, box-shadow ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${props => props.theme.transitions.normal};
  
  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity ${props => props.theme.transitions.normal};
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const ProjectLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.medium};
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const ProjectContent = styled.div`
  padding: ${props => props.theme.spacing.lg};
`;

const ProjectTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.large};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.regular};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const ProjectTag = styled.span`
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.small};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.small};
  font-weight: 500;
`;

const MoreProjectsButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing.xxl};
`;

export default Projects;