import apiClient from '@/lib/axios';

export const getNotificationList = async () => {
    const res = await apiClient.get('/notifications');
    return res;
};
