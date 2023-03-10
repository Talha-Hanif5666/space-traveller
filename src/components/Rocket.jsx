import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { booking } from '../redux/rockets/rocketsSlice';

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={rocket.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{rocket.name}</h5>
              <p className="card-text">
                <Badge role="status" bg={rocket.booked ? 'secondary' : 'primary'} pill>{rocket.booked ? 'Reserved' : 'Available'}</Badge>
                {rocket.desc}
              </p>
              <Button role="button" onClick={() => dispatch(booking(rocket.id))} variant={rocket.booked ? 'secondary' : 'primary'}>{rocket.booked ? 'Cancel reservation' : 'Reserve rocket'}</Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    booked: PropTypes.bool.isRequired,
  })).isRequired,
};
