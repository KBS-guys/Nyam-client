import apiClient from '@/lib/axios';

export const getWaterData = async () => {
    const res = await apiClient.get('/records/water');
    return res;
};

export const postWaterData = async (amount: any) => {
    const res = await apiClient.post('/records/water', { addAmount: amount });
    return res;
};

export const getWeightData = async () => {
    const res = await apiClient.get('/records/weight');
    return res;
};

export const postWeightData = async (date: any, amount: any) => {
    const res = await apiClient.post('/records/weight', { date: date, weight: amount });
    return res;
};
