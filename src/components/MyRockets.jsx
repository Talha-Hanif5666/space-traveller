import React from 'react'
import { ListGroup } from 'react-bootstrap';

function MyRockets({myRockets}) {
  console.log(myRockets);
  let content = ''
  if (myRockets.length !== 0) {
    content = (
      <ListGroup>
        {myRockets ? myRockets.map((rocket) => <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>) : <p>No rockets</p>}
      </ListGroup>
      )
  } else {
    content = <p>No rockets yet</p>
  }
  return (
    <>
      <h3>Rockets booked</h3>
      {content}
    </>
  )
}

export default MyRockets