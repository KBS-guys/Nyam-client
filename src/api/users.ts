import apiClient from '@/lib/axios';

export const getUserData = async () => {
    const res = await apiClient.get('/users/me');
    return res;
};

export const patchUserData = async (userData: any) => {
    const res = await apiClient.patch('/users/me', userData);
    return res;
};

export const getUserNutrition = async () => {
    const res = await apiClient.get('/users/me/nutrition');
    return res;
};

export const patchUserNutrition = async (nutritionData: any) => {
    const res = await apiClient.patch('/users/me/nutrition', nutritionData);
    return res;
};

export const getAchievemetns = async () => {
    const res = await apiClient.get('/achievemetns/calendar');
    return res;
};
