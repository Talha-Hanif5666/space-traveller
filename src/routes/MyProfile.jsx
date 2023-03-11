import { useSelector } from 'react-redux';
import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import MyRockets from '../components/MyRockets';

const MyProfile = ({ myRockets }) => {
  const reservedMissions = useSelector((state) => state.missionsReducer

    .filter((mis) => mis.isReserved));
  return (
    <main id="profileSpace">
      <Container>
        <Row>
          <Col>
            <div className="container row col-6">
              <h2>My Missions</h2>
              <ul className="list-group">
                {reservedMissions.length ? reservedMissions.map((mission) => <li key={mission.id} className="list-group-item" style={{ fontWeight: 'bold' }}>{mission.name}</li>) : <li className="list-group-item" style={{ fontWeight: 'bold' }}>No Missions Joined</li> }
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <MyRockets myRockets={myRockets} />
            </div>
          </Col>
        </Row>
      </Container>

    </main>
  );
};

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
