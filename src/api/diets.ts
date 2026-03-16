import apiClient from '@/lib/axios';

export const postDiets = async (dietsData: any) => {
    const res = await apiClient.post('/diets', dietsData);
    return res;
};

export const getDietsDetail = async (mealType: any) => {
    const res = await apiClient.get(`/diets/${mealType}`);
    return res;
};

export const getDailySummary = async () => {
    const res = await apiClient.get('/diets/daily/summary');
    return res;
};

export const postDietSets = async (dietSets: any) => {
    const res = await apiClient.post('/diet/sets', dietSets);
    return res;
};

export const getDietSetsList = async () => {
    const res = await apiClient.get('/diet/sets');
    return res;
};

export const getDietSets = async (id: number) => {
    const res = await apiClient.get(`/diet/sets/${id}`);
    return res;
};

export const patchUserDietSets = async (id: number, dietSets: any) => {
    const res = await apiClient.patch(`/diet/sets/${id}`, dietSets);
    return res;
};
