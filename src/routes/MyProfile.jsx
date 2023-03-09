import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

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
    </main>
  );
};

export default MyProfile;
