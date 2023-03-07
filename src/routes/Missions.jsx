import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missionsSlice';
import MissionTable from '../components/MissionTable/MissionTable';

const Missions = () => {
  const mission = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div id="spacing">
      <h1 className="mission-head">MISSIONS</h1>
      {mission.loading && <h1>Loading Missions....</h1>}
      {!mission.loading && mission.error ? (
        <div>
          Error:
          {mission.error}
        </div>
      ) : null}
      {!mission.loading && mission.missions.length ? <MissionTable /> : null}
    </div>
  );
};

export default Missions;
