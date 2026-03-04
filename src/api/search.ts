import apiClient from '@/lib/axios';

export const getRecentSearch = async () => {
    const res = await apiClient.get('/search/recent');
    return res;
};

export const deleteRecentSearch = async (id: number) => {
    const res = await apiClient.delete(`/search/recent/${id}`);
    return res;
};

export const getFavorites = async () => {
    const res = await apiClient.get('/favorites');
    return res;
};

export const postFavorites = async (favorites: any) => {
    const res = await apiClient.post('/favorites', { foodId: favorites });
    return res;
};

export const deleteFavorites = async (id: number) => {
    const res = await apiClient.delete(`/favorites/${id}`);
    return res;
};

export const postDietSets = async (name: any, items: any) => {
    const res = await apiClient.post('/users/me/diet-sets', { setName: name, items: items });
    return res;
};

export const getDietSets = async (id: number) => {
    const res = await apiClient.get(`/users/me/diet-sets/${id}`);
    return res;
};

export const searchFoods = async () => {
    const res = await apiClient.get('/foods/search');
    return res;
};

export const getFoodDetail = async (id: number) => {
    const res = await apiClient.get(`/foods/${id}`);
    return res;
};

export const postDiets = async (dietsData: any) => {
    const res = await apiClient.post('/diets', dietsData);
    return res;
};

export const postCustomFoods = async (customFoodData: any) => {
    const res = await apiClient.post('/foods/custom', customFoodData);
    return res;
};
