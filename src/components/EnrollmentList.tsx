import React from 'react';
import { useQuery } from 'react-query';
import { fetchEnrollments } from '../api/enrollmentApi';
import { formattedDate } from '../shared/date';

interface EnrollmentListProps {
  userId: number;
}

const EnrollmentList: React.FC<EnrollmentListProps> = ({ userId }) => {
  const timezoneOffset = new Date().getTimezoneOffset();

  const { data, isLoading, error } = useQuery(
    ['enrollments', userId, timezoneOffset],
    () => fetchEnrollments(userId, timezoneOffset),
    { enabled: !!userId }
  );

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar os cursos.</div>;

  return (
    <div>
      <h2>Cursos</h2>
      <ul>
        {data &&
          data.map((enrollment: any) => (
            <li key={enrollment.id}>
              {enrollment.course.title} (Matriculado em: {formattedDate(enrollment.enrolledAt, true)})
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EnrollmentList;
