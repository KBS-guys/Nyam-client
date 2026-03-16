import apiClient from '@/lib/axios';

export const getFavorites = async () => {
    const res = await apiClient.get('/foods/favorites');
    return res;
};

export const getIsFavorites = async (id: number) => {
    const res = await apiClient.get(`/foods/${id}/favorites`);
    return res;
};

export const postFavorites = async (id: number, favorites: any) => {
    const res = await apiClient.post(`/foods/${id}/favorites`, { foodId: favorites });
    return res;
};

export const deleteFavorites = async (id: number) => {
    const res = await apiClient.delete(`/foods/${id}/favorites`);
    return res;
};
