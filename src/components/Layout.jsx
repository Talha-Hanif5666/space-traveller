import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';

function Layout({ error, loading }) {
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
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
