import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
