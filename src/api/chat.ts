import apiClient from '@/lib/axios';

export const getChatHistory = async () => {
    const res = await apiClient.get('/ai/history');
    return res;
};

export const getChatDetail = async (id: number) => {
    const res = await apiClient.patch(`/ai/history/${id}`);
    return res;
};

export const postChatQnA = async (question: any) => {
    const res = await apiClient.post('/ai/chat', question);
    return res;
};
