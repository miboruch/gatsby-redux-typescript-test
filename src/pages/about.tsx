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

type QueryProps = {
  site: {
    siteMetadata: {
      author: string;
      description: string;
      title: string;
    };
  };
};

const About: React.FC<PageProps<QueryProps>> = ({ data }) => {
  console.log(data);
  return (
    <StyledWrapper isDark={true}>
      <h1>HELLO ABOUT</h1>
      <AboutInfo firstName={'Michal'} lastName={'Boruch'} />
    </StyledWrapper>
  );
};

export default About;

export const pageInfo = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`;
