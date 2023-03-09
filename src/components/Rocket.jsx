import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';

function Rocket({ rocket, booked }) {
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
                <Badge bg={booked ? 'secondary' : 'primary'} pill>{booked ? 'Reserved' : 'Available'}</Badge>
                {rocket.desc}
              </p>
              <Button variant={booked ? 'secondary' : 'primary'}>{booked ? 'Cancel reservation' : 'Reserve rocket'}</Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Rocket;

Rocket.defaultProps = {
  booked: false,
};

Rocket.propTypes = {
  rocket: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })).isRequired,
  booked: PropTypes.bool,
};
