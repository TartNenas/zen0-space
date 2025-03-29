import React from 'react';
import styled from 'styled-components';
import Container from '../components/styled/Container';
import Section from '../components/styled/Section';
import { Helmet } from 'react-helmet'; // You may need to install this package

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Khairul Anuar</title>
        <meta name="description" content="Privacy Policy for our web and mobile applications" />
      </Helmet>
      
      <Section>
        <Container>
          <PageTitle>Privacy Policy</PageTitle>
          <LastUpdated>Last Updated: {new Date().toLocaleDateString()}</LastUpdated>
          
          <PolicySection>
            <SectionTitle>1. Web Application Privacy Policy</SectionTitle>
            
            <PolicyBlock>
              <BlockTitle>1.1 Information We Collect</BlockTitle>
              <BlockText>
                <p>When you use our web application, we may collect the following types of information:</p>
                <ul>
                  <li><strong>Personal Information:</strong> Name, email address, and contact details you provide when creating an account or contacting us.</li>
                  <li><strong>Authentication Data:</strong> Information required to verify your identity and manage your account.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, features used, and time spent on the site.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies, and similar technologies.</li>
                </ul>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>1.2 How We Use Your Information</BlockTitle>
              <BlockText>
                <p>We use the collected information for the following purposes:</p>
                <ul>
                  <li>To provide, maintain, and improve our services</li>
                  <li>To authenticate users and secure accounts</li>
                  <li>To personalize your experience and deliver content relevant to your interests</li>
                  <li>To respond to your requests, comments, or questions</li>
                  <li>To send you technical notices, updates, and administrative messages</li>
                  <li>To monitor usage patterns and analyze trends to improve functionality and user experience</li>
                </ul>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>1.3 Data Storage and Security</BlockTitle>
              <BlockText>
                <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Data is stored on secure servers and protected by encryption protocols. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>1.4 Cookies and Similar Technologies</BlockTitle>
              <BlockText>
                <p>Our web application uses cookies and similar tracking technologies to collect and track information. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.</p>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>1.5 Third-Party Services</BlockTitle>
              <BlockText>
                <p>We may use third-party services to assist us in analyzing how our service is used or to perform service-related services. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
              </BlockText>
            </PolicyBlock>
          </PolicySection>
          
          <PolicySection>
            <SectionTitle>2. Android Application Privacy Policy</SectionTitle>
            
            <PolicyBlock>
              <BlockTitle>2.1 Information We Collect</BlockTitle>
              <BlockText>
                <p>Our Android application available on Google Play Store may collect the following information:</p>
                <ul>
                  <li><strong>Personal Information:</strong> Name, email address, and profile information when you create an account.</li>
                  <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers, and mobile network information.</li>
                  <li><strong>Location Data:</strong> With your consent, we may collect and process information about your precise or approximate location.</li>
                  <li><strong>Usage Statistics:</strong> Information about how you use the app, including app features accessed, crash logs, and performance data.</li>
                  <li><strong>User Content:</strong> Content you create, upload, or share through the application.</li>
                </ul>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>2.2 Google Play Services</BlockTitle>
              <BlockText>
                <p>Our Android application uses Google Play Services which may collect information used to identify you. We adhere to Google Play's Developer Policies and Developer Distribution Agreement when collecting and handling user data.</p>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>2.3 App Permissions</BlockTitle>
              <BlockText>
                <p>Our application may request certain permissions to access features on your device. These permissions may include:</p>
                <ul>
                  <li><strong>Camera:</strong> To enable photo uploading features</li>
                  <li><strong>Storage:</strong> To store content and data locally on your device</li>
                  <li><strong>Location:</strong> To provide location-based features</li>
                  <li><strong>Microphone:</strong> For voice recording features</li>
                  <li><strong>Notifications:</strong> To send you important updates and alerts</li>
                </ul>
                <p>You can manage these permissions at any time through your device settings.</p>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>2.4 Data Retention and Deletion</BlockTitle>
              <BlockText>
                <p>We retain user data for as long as your account is active or as needed to provide you services. You can request deletion of your account and associated data at any time by contacting us. Upon deletion request, we will remove your personal information from our active databases, though some information may be retained in archives for legal purposes or to prevent fraud.</p>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>2.5 Children's Privacy</BlockTitle>
              <BlockText>
                <p>Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.</p>
              </BlockText>
            </PolicyBlock>
          </PolicySection>
          
          <PolicySection>
            <SectionTitle>3. General Privacy Information</SectionTitle>
            
            <PolicyBlock>
              <BlockTitle>3.1 Your Data Rights</BlockTitle>
              <BlockText>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul>
                  <li>Access to your personal data</li>
                  <li>Correction of inaccurate or incomplete data</li>
                  <li>Deletion of your personal data</li>
                  <li>Restriction or objection to processing of your data</li>
                  <li>Data portability (receiving your data in a structured format)</li>
                  <li>Withdrawal of consent at any time</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>3.2 Changes to This Privacy Policy</BlockTitle>
              <BlockText>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
              </BlockText>
            </PolicyBlock>
            
            <PolicyBlock>
              <BlockTitle>3.3 Contact Us</BlockTitle>
              <BlockText>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                  <li>By email: tartnenas_kai@outlook.com</li>
                  <li>By phone: +6011-1541 5268</li>
                </ul>
              </BlockText>
            </PolicyBlock>
          </PolicySection>
        </Container>
      </Section>
    </>
  );
};

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.xxlarge};
  color: ${props => props.theme.colors.primary};
`;

const LastUpdated = styled.p`
  text-align: center;
  font-style: italic;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PolicySection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.xlarge};
  margin-bottom: ${props => props.theme.spacing.lg};
  padding-bottom: ${props => props.theme.spacing.sm};
  border-bottom: 2px solid ${props => props.theme.colors.lightGray};
`;

const PolicyBlock = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const BlockTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const BlockText = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.7;
  
  p {
    margin-bottom: ${props => props.theme.spacing.md};
  }
  
  ul {
    margin-left: ${props => props.theme.spacing.lg};
    margin-bottom: ${props => props.theme.spacing.md};
    
    li {
      margin-bottom: ${props => props.theme.spacing.sm};
    }
  }
  
  strong {
    color: ${props => props.theme.colors.text};
  }
`;

export default Privacy; 