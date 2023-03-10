import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import MyRockets from '../components/MyRockets';

const MyProfile = () => {
  const mission = useSelector((state) => state.missions);
  const display = mission.missions.filter((mission) => mission.reserved === true);

  return (
    <main id="profileSpace">
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
      <div>
        <h1>My profile</h1>
        <h3>Under development</h3>
        <MyRockets myRockets={myRockets} />
      </div>
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
