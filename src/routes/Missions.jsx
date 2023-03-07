import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missionsSlice';
import MissionTable from '../components/MissionTable/MissionTable';
import '../App.css';

const Missions = () => {
  const mission = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div id="spacing">
      <h1>MISSIONS</h1>
      {mission.loading && <h1>loading....</h1>}
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
