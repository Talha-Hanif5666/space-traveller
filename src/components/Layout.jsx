import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';


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
