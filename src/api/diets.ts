import apiClient from '@/lib/axios';

export const postDiets = async (dietsData: any) => {
    const res = await apiClient.post('/diets', dietsData);
    return res;
};

export const getDietsDetail = async (mealType: any) => {
    const res = await apiClient.get(`/home/diets/${mealType}`);
    return res;
};
