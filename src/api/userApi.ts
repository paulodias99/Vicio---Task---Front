import apiClient from './apiClient';

export const fetchUsersById = async (userId: number, timezoneOffset: number) => {
  const response = await apiClient.get(`/users/${userId}`, {
    headers: { 'x-timezone-offset': timezoneOffset },
  });
  return response.data;
};
