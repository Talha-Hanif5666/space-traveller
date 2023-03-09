import React from 'react';
import PropTypes from 'prop-types';
import MyRockets from '../components/MyRockets';

function MyProfile({ myRockets }) {
  return (
    <div>
      <h1>My profile</h1>
      <h3>Under development</h3>
      <MyRockets myRockets={myRockets} />
    </div>
  );
}

export default MyProfile;

MyProfile.propTypes = {
  myRockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    booked: PropTypes.bool.isRequired,
  })).isRequired,
};
