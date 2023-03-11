import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
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
          <Button
            style={{
              width: '125px', fontSize: '12px', margintop: '50%', fontWeight: 'bold', backgroundColor: isReserved ? 'blue' : 'grey',
            }}
            className={isReserved ? 'active-button' : 'status'}
          >
            {isReserved ? 'Active Member' : 'Not a Member'}
          </Button>
        </td>
        <td className="button-join">
          <Button
            style={{
              width: '125px', fontSize: '12px', margintop: '50%', fontWeight: 'bold', backgroundColor: isReserved ? 'red' : 'grey',
            }}
            type="button"
            className={isReserved ? 'leave' : 'join'}
            onClick={handleJoining}
          >
            {isReserved ? 'Leave Mission ' : 'Join Mission'}
          </Button>

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
