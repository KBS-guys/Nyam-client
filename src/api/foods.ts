import apiClient from '@/lib/axios';

export const searchFoods = async () => {
    const res = await apiClient.get('/foods/search');
    return res;
};

export const getFoodDetail = async (id: number) => {
    const res = await apiClient.get(`/foods/${id}`);
    return res;
};

export const postCustomFoods = async (customFoodData: any) => {
    const res = await apiClient.post('/foods/custom', customFoodData);
    return res;
};
