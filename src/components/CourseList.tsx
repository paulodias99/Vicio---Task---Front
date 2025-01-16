import React from 'react';
import { useQuery } from 'react-query';
import { fetchCourses } from '../api/courseApi';

const CourseList: React.FC = () => {
  const timezoneOffset = new Date().getTimezoneOffset(); 

  const { data, isLoading, error } = useQuery(['courses', timezoneOffset], () => fetchCourses(timezoneOffset));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading courses.</div>;

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {data.map((course: any) => (
          <li key={course.id}>
            <p><strong>Title:</strong> {course.title}</p>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Hours:</strong> {course.hours}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
