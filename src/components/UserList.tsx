import React from 'react';
import { useQuery } from 'react-query';
import { fetchUsersById } from '../api/userApi';
import { formattedDate } from '../shared/date';

interface UserListProps {
  userId: number;
}

const UserList: React.FC<UserListProps> = ({ userId }) => {
  const timezoneOffset = new Date().getTimezoneOffset();

  const { data, isLoading, error } = useQuery(
    ['users', userId, timezoneOffset],
    () => fetchUsersById(userId, timezoneOffset),
    { enabled: !!userId }
  );

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar o usuário.</div>;

  return (
    <div>
      <h2>Usuário</h2>
      <ul>
        {data && (
          <li key={data.id}>
            <p><strong>Nome:</strong> {data.name}</p>
            <p><strong>E-mail:</strong> {data.email}</p>
            <p><strong>Criado em:</strong> {formattedDate(data.createdAt)}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default UserList;
