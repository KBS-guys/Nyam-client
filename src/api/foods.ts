import apiClient from '@/lib/axios';

export const searchFoods = async () => {
    const res = await apiClient.get('/foods/search');
    return res;
};

export const getRecentSearch = async () => {
    const res = await apiClient.get('/foods/search/recent');
    return res;
};

export const deleteRecentSearch = async (keyword: string) => {
    const res = await apiClient.delete(`/foods/search/recent/${keyword}`);
    return res;
};

export const deleteRecentSearchAll = async () => {
    const res = await apiClient.delete('/foods/search/recent');
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

export const deleteCustomFoods = async (id: number) => {
    const res = await apiClient.delete(`/foods/custom/${id}`);
    return res;
};
