import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateMission } from '../../redux/missions/missionsSlice';

const Mission = (props) => {
  const {
    id, name, description, isReserved,
  } = props;
  const dispatch = useDispatch();
  const handleJoining = () => {
    dispatch(updateMission(id));
  };

  return (
    <>
      <tr>
        <td style={{ fontWeight: 'bold' }}>{name}</td>
        <td>
          {description}
        </td>
        <td className="button-status">
          <div
            className={isReserved ? 'active-button' : 'status'}
          >
            {isReserved ? 'Active Member' : 'NOT A MEMBER'}
          </div>
        </td>
        <td className="button-join">
          <button
            type="button"
            className={isReserved ? 'leave' : 'join'}
            onClick={handleJoining}
          >
            {isReserved ? 'Leave Mission' : 'Join Mission'}
          </button>

        </td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

export default Mission;
