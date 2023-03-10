import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';

function Layout({ status }) {
  const { error, loading } = status;
  return (
    <>
      <Navbar error={error} loading={loading} />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;

Layout.propTypes = {
  status: PropTypes.objectOf(PropTypes.shape({
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  })).isRequired,
};
