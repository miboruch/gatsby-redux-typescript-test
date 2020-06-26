import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getPersonData } from '../actions/personActions';
import SEO from '../components/seo';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Person = ({ id, isLoading, personData, getPersonData }) => {
  useEffect(() => {
    getPersonData();
  }, []);

  return (
    <Wrapper>
      <SEO title={'info'} />
      <h1>Person page</h1>
      <p>Person ID: {id}</p>
      {isLoading || !personData ? (
        <p>LOADING...</p>
      ) : (
        <>
          <p>{personData.results[0].name.first}</p>
          <p>{personData.results[0].name.last}</p>
        </>
      )}
    </Wrapper>
  );
};

const mapStateToProps = ({ personReducer: { isLoading, personData } }) => {
  return { isLoading, personData };
};

const mapDispatchToProps = dispatch => {
  return {
    getPersonData: () => dispatch(getPersonData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
