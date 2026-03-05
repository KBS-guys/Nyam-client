import {
	AnalysisWeekdayType,
	AnalysisPeriodType,
	AnalysisNutrientType,
} from "./common";

// 분석 페이지 관련 API 타입 정의

// 분석 페이지 데이터 가지고 오기
export type AnalysisWeeklyResponse = {
	goalTracking: AnalysisGoalTracking;
	weightTrend: AnalysisWeightTrend;
	intakeStats: AnalysisIntakeStats;
	weeklySummary: AnalysisWeeklySummary;
};

export type AnalysisGoalTracking = {
	streakDays: number;
	weeklyStatus: AnalysisWeeklyStatusItem[];
};

export type AnalysisWeeklyStatusItem = {
	day: AnalysisWeekdayType;
	recorded: boolean;
};

export type AnalysisWeightTrend = {
	currentWeight: number;
	diffFromStart: number;
	history: AnalysisWeightHistoryItem[];
};

export type AnalysisWeightHistoryItem = {
	date: string;
	weight: number;
};

export type AnalysisIntakeStats = {
	period: AnalysisPeriodType;
	dailyStats: AnalysisDailyIntakeStatItem[];
};

export type AnalysisDailyIntakeStatItem = {
	day: AnalysisWeekdayType;
	carbs: number;
	protein: number;
	fat: number;
	etc: number;
};

export type AnalysisWeeklySummary = {
	avgKcal: number;
	recordedDays: number;
	goalAchievementRate: number;
	avgWeightChange: number;
};

// 건강 레포트 발행
export type AnalysisReportDataResponse = {
	userName: string;
	reportPeriod: string;
	summary: AnalysisReportSummary;
	weightStat: AnalysisReportWeightStat;
	comment: string;
};

export type AnalysisReportSummary = {
	totalKcal: number;
	avgKcal: number;
	bestNutrient: AnalysisNutrientType;
	achievementRate: number;
};

export type AnalysisReportWeightStat = {
	startWeight: number;
	currentWeight: number;
	totalLoss: number;
};
