import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Mission from '../components/MissionTable/MissionTable';
import { retriveMissions } from '../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.missionsReducer);
  const renderMissions = (missionsData) => missionsData.map((mission) => (
    <Mission
      id={mission.id}
      key={mission.id}
      name={mission.name}
      description={mission.description}
      isReserved={mission.isReserved}
    />
  ));
  return (
    <div className="table-container">
      <Table striped className="main-table my-5">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {renderMissions(missions)}
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
