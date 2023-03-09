import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

function MyRockets({ myRockets }) {
  let content = '';
  if (myRockets.length !== 0) {
    content = (
      <ListGroup>
        {myRockets.map((rocket) => <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>)}
      </ListGroup>
    );
  } else {
    content = <p>No rockets yet</p>;
  }
  return (
    <>
      <h3>Rockets booked</h3>
      {content}
    </>
  );
}

export default MyRockets;

MyRockets.propTypes = {
  myRockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    booked: PropTypes.bool.isRequired,
  })).isRequired,
};
