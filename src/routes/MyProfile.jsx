import React from 'react';
import MyRockets from '../components/MyRockets';

function MyProfile({myRockets}) {
  return (
    <div>
      <h1>My profile</h1>
      <h3>Under development</h3>
      <MyRockets myRockets={myRockets}/>
    </div>
  );
}

export default MyProfile;
