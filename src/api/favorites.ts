import apiClient from '@/lib/axios';

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
