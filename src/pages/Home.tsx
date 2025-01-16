import React from 'react';
import UserList from '../components/UserList';
import EnrollmentList from '../components/EnrollmentList';
import '../styles/Home.css';
import logoPhoto from '../assets/images/viciologo.png';

const Home: React.FC = () => {
  return (
    <div className="container">
      <aside className="sidebar">
      <img src={logoPhoto} alt="Logo da Vício" className="logo-photo" />

        <h2>Seja Bem Vindo(a)!</h2>
      </aside>

      <main className="main-content">
        <h1>Task Prática</h1>
        <UserList userId={13} />
        <EnrollmentList userId={13} />
      </main>
    </div>
  );
};

export default Home;
