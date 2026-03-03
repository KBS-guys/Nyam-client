import apiClient from '@/lib/axios';

export const getCalendarAchievements = async () => {
    const res = await apiClient.get('/home/calendar/achievements');
    return res;
};

export const getNotifications = async () => {
    const res = await apiClient.get('/home/notifications');
    return res;
};

export const getDailySummary = async () => {
    const res = await apiClient.get('/home/daily/summary');
    return res;
};

export const getDietsDetail = async (mealType: any) => {
    const res = await apiClient.get(`/home/diets/${mealType}`);
    return res;
};

export const getWaterData = async () => {
    const res = await apiClient.get('/home/water');
    return res;
};

export const postWaterData = async (amount: any) => {
    const res = await apiClient.post('/home/water', { addAmount: amount });
    return res;
};

export const getWeightData = async () => {
    const res = await apiClient.get('/home/weight');
    return res;
};

export const postWeightData = async (date: any, amount: any) => {
    const res = await apiClient.post('/home/weight', { date: date, weight: amount });
    return res;
};
