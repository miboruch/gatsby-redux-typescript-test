import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: #2d2d2d;
  text-decoration: none;
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Wrapper>
      <StyledLink to={'/about'}>Go to about page</StyledLink>
      <StyledLink to={'/app/person/2'}>Go to person page</StyledLink>
      <StyledLink to={'/page-2'}>Go to 2nd page</StyledLink>
    </Wrapper>
  </Layout>
);

export default IndexPage;
