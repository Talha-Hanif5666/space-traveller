import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import planet from '../assets/planet.png'
// import store from '../redux/store';
// import { getRockets } from '../redux/rockets/rocketsSlice';


// store.dispatch(getRockets())
function Rockets() {
  return (
    <div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={planet} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text"><Badge bg="primary" pill>Available</Badge> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <Button variant='primary'>Reserve rocket</Button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className='list-group-item'>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={planet} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text"><Badge bg="secondary" pill>Reserved</Badge> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <Button variant='secondary'>Cancel reservation</Button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Rockets;
