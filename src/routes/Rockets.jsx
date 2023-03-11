import React from 'react';
import PropTypes from 'prop-types';
import Rocket from '../components/Rocket';

import store from '../redux/store';
import { getRockets } from '../redux/rockets/rocketsSlice';

store.dispatch(getRockets());

function Rockets({ rockets }) {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />) }
      </ul>
    </div>
  );
}

export default Rockets;

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    booked: PropTypes.bool.isRequired,
  })).isRequired,
};
