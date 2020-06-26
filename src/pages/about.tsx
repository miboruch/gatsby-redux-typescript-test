import React from 'react';
import styled from 'styled-components';
import { PageProps, graphql } from 'gatsby';
import AboutInfo from '../components/AboutInfo';

type WrapperProps = {
  isDark: boolean;
};

const StyledWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100vh;
  background-color: ${({ isDark }) => (isDark ? '#2d2d2d' : '#f5f5f5')};
  color: ${({ isDark }) => (isDark ? '#f5f5f5' : '#2d2d2d')};
  padding: 2rem;
`;

const About: React.FC<PageProps> = ({ data }) => {
  console.log(data);
  return (
    <StyledWrapper isDark={true}>
      <h1>HELLO ABOUT</h1>
      <AboutInfo firstName={'Michal'} lastName={'Boruch'} />
    </StyledWrapper>
  );
};

export default About;

export const query = graphql`
  {
    site {
      port
    }
  }
`;
