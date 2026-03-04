import apiClient from '@/lib/axios';

export const getUserDietSets = async () => {
    const res = await apiClient.get('/users/me/diet-sets');
    return res;
};

export const patchUserDietSets = async (id: number, dietSets: any) => {
    const res = await apiClient.patch(`/users/me/diet-sets${id}`, dietSets);
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
