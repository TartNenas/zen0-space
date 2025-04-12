import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Container from './styled/Container';
import Section from './styled/Section';
import Button from './styled/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Modified to match the example structure
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
        }
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmitStatus({
            success: true,
            message: 'Message sent successfully! I will get back to you soon.'
          });
          // Reset the form
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus({
            success: false,
            message: 'Failed to send message. Please try again later.'
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Section id="contact">
      <Container>
        <SectionHeading>Get In Touch</SectionHeading>
        <ContactContent>
          <ContactInfo>
            <ContactInfoText>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </ContactInfoText>
            <ContactDetails>
              <ContactItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactItemText>
                  <ContactItemLabel>Email</ContactItemLabel>
                  <ContactItemValue>kairul@zen0.space</ContactItemValue>
                </ContactItemText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactItemText>
                  <ContactItemLabel>Phone</ContactItemLabel>
                  <ContactItemValue>+6011-1541 5268</ContactItemValue>
                </ContactItemText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactItemText>
                  <ContactItemLabel>Location</ContactItemLabel>
                  <ContactItemValue>Kuala Lumpur, MY</ContactItemValue>
                </ContactItemText>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput type="text" id="name" name="user_name" placeholder="Your Name" required />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" id="email" name="user_email" placeholder="Your Email" required />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput type="text" id="subject" name="subject" placeholder="Subject" required />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea id="message" name="message" rows={6} placeholder="Your Message" required></FormTextarea>
            </FormGroup>
            {submitStatus && (
              <StatusMessage success={submitStatus.success}>
                {submitStatus.message}
              </StatusMessage>
            )}
            <Button 
              type="submit" 
              $primary 
              $fullWidth 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </ContactForm>
        </ContactContent>
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

const ContactContent = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xxl};
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactInfoText = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.textLight};
  line-height: 1.7;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ContactDetails = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  margin-right: ${props => props.theme.spacing.md};
`;

const ContactItemText = styled.div``;

const ContactItemLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const ContactItemValue = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const ContactForm = styled.form`
  flex: 1;
  background-color: ${props => props.theme.colors.light};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.regular};
  box-shadow: ${props => props.theme.shadows.medium};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

interface FormInputProps {
  type: string;
  id: string;
  placeholder: string;
}

const FormInput = styled.input.attrs<FormInputProps>(props => ({
  type: props.type,
  id: props.id,
  placeholder: props.placeholder
}))`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.small};
  border: 1px solid ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.regular};
  transition: border-color ${props => props.theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

interface FormTextareaProps {
  id: string;
  rows: number;
  placeholder: string;
}

const FormTextarea = styled.textarea.attrs<FormTextareaProps>(props => ({
  id: props.id,
  rows: props.rows,
  placeholder: props.placeholder
}))`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.small};
  border: 1px solid ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.regular};
  resize: vertical;
  font-family: inherit;
  transition: border-color ${props => props.theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

// Fix the StatusMessage component to prevent the warning
const StatusMessage = styled('div').withConfig({
  shouldForwardProp: (prop) => prop !== 'success'
})<{ success: boolean }>`
  padding: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.small};
  text-align: center;
  background-color: ${props => props.success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.success ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.success ? '#c3e6cb' : '#f5c6cb'};
`;

export default Contact;