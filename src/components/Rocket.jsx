import React from 'react'
import { Badge, Button } from 'react-bootstrap';

function Rocket({rocket}) {
  return (
    <li className='list-group-item'>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={rocket.img} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{rocket.name}</h5>
              <p className="card-text"><Badge bg="primary" pill>Available</Badge>{rocket.desc}</p>
              <Button variant='primary'>Reserve rocket</Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Rocket