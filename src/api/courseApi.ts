import apiClient from './apiClient';

export const fetchCourses = async (timezoneOffset: number) => {
  const response = await apiClient.get('/courses', {
    headers: { 'x-timezone-offset': timezoneOffset },
  });
  return response.data;
};
