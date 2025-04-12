import React from 'react';
import styled from 'styled-components';
import Container from './styled/Container';
import Section from './styled/Section';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: <FaCode />,
    skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Styled Components', 'Flutter']
  },
  {
    title: 'Backend Development',
    icon: <FaServer />,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Authentication', 'Authorization']
  },
  {
    title: 'Database',
    icon: <FaDatabase />,
    skills: ['Firebase', 'Supabase', 'Turso', 'MongoDB', 'PostgreSQL', 'SQL']
  },
  {
    title: 'DevOps & Tools',
    icon: <FaCode />,
    skills: ['Git', 'GitHub', 'Netlify', 'Vercel', 'VS Code', 'Responsive Design', 'Performance Optimization']
  }
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" $light>
      <Container>
        <SectionHeading>My Skills</SectionHeading>
        <SkillsDescription>
          Here are the technologies and tools I work with to build modern, responsive, and efficient applications.
        </SkillsDescription>
        
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCard key={index}>
              <SkillCardHeader>
                <SkillIcon>{category.icon}</SkillIcon>
                <SkillCategoryTitle>{category.title}</SkillCategoryTitle>
              </SkillCardHeader>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </Section>
  );
};

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md};
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

const SkillsDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.medium};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const SkillCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.regular};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: ${props => props.theme.spacing.lg};
  transition: transform ${props => props.theme.transitions.normal}, box-shadow ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const SkillIcon = styled.div`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.primary};
  margin-right: ${props => props.theme.spacing.sm};
`;

const SkillCategoryTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const SkillItem = styled.li`
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.small};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.small};
  font-weight: 500;
`;

export default Skills;