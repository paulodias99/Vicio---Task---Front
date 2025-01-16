import apiClient from './apiClient';

export const fetchEnrollments = async (userId: number, timezoneOffset: number) => {
  const response = await apiClient.get(`/enrollments/${userId}`, {
    headers: { 'x-timezone-offset': timezoneOffset },
  });
  return response.data;
};
