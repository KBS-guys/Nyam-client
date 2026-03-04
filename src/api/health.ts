import apiClient from '@/lib/axios';

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
