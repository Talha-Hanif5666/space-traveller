import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import MyRockets from '../components/MyRockets';

const MyProfile = ({ myRockets }) => {
  const mission = useSelector((state) => state.missions);
  const display = mission.missions.filter((mission) => mission.reserved === true);

  return (
    <main id="profileSpace">
      <Container>
        <Row>
          <Col>
            <aside className="profmission">
              <h2>My Missions</h2>
              <Table bordered hover>
                <tbody>
                  {display.map((mission) => (
                    <tr key={mission.id}>
                      <td style={{ fontWeight: 'bold' }}>{mission.name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </aside>
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
