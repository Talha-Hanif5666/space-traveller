import Table from 'react-bootstrap/Table';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const MissionTable = () => {
  const table = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const joinMissionHandler = (e) => {
    const { target: { id } } = e;
    dispatch(joinMission(id));
  };

  const leaveMissionHandler = (e) => {
    const { target: { id } } = e;
    dispatch(leaveMission(id));
  };

  return (
    <Table striped bordered hover id="tablespace">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {table.missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>
              <Stack direction="horizontal" margintop="50%" gap={3}>
                {!mission.reserved ? (
                  <Button
                    style={{
                      width: '125px', fontSize: '12px', margintop: '50%', fontWeight: 'bold',
                    }}
                    variant="secondary"
                  >
                    NOT A MEMBER
                  </Button>
                ) : (<Button style={{ width: '125px', fontSize: '12px', fontWeight: 'bold' }} variant="info">ACTIVE MEMBER</Button>)}
                {!mission.reserved ? (
                  <Button
                    style={{
                      width: '125px', fontSize: '12px', fontWeight: 'bold', border: '1px solid gray',
                    }}
                    id={mission.id}
                    onClick={joinMissionHandler}
                    variant="light"
                  >
                    JOIN MISSION
                  </Button>
                ) : (<Button style={{ width: '125px', fontSize: '12px', fontWeight: 'bold' }} id={mission.id} onClick={leaveMissionHandler} variant="danger">LEAVE MISSION</Button>)}
              </Stack>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MissionTable;
