import apiClient from '@/lib/axios';

export const getWeeklyAnalysis = async () => {
    const res = await apiClient.get('/analysis/weekly');
    return res;
};

export const getAnalysisReport = async () => {
    const res = await apiClient.get('/analysis/report/data');
    return res;
};
