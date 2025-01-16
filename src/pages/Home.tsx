import React from 'react';
import UserList from '../components/UserList';
import EnrollmentList from '../components/EnrollmentList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Course Management System</h1>
      <UserList userId={13} />
      <EnrollmentList userId={13} />
    </div>
  );
};

export default Home;
