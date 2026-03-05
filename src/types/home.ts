import type { MealType, NotificationType } from "./common";

// 홈 화면 관련 API 타입 정의

// 월별 칼로리 요약 조회
export type CalendarAchievementsResponse = {
	year: number;
	month: number;
	dailyAchievements: CalendarDailyAchievement[];
};

export type CalendarDailyAchievement = {
	date: string;
	achievementRate: number;
};

// 알림 목록 조회
export type NotificationResponse = {
	notificationId: number;
	type: NotificationType;
	title: string;
	message: string;
	isRead: boolean;
	createdAt: string;
};

// 일일 메인 페이지 통합 조회
export type DailySummaryResponse = {
	date: string;
	totalKcal: number;
	targetKcal: number;
	achievementRate: number;
	nutrients: DailySummaryNutrients;
	meals: DailySummaryMeal[];
};

export type DailySummaryNutrients = {
	carbs: Nutrient;
	protein: Nutrient;
	fat: Nutrient;
};

export type Nutrient = {
	current: number;
	target: number;
	unit: string;
};

export type DailySummaryMeal = {
	mealType: MealType;
	isRecorded: boolean;
	totalKcal: number;
	mainFoodName: string | null;
};

// 식단 상세 조회
export type DietResponse = {
	mealType: MealType;
	totalKcal: number;
	nutrientRatio: DietNutrientRatio;
	nutrients: DietNutrients;
	foods: DietFood[];
};

export type DietNutrientRatio = {
	carbsPercent: number;
	proteinPercent: number;
	fatPercent: number;
};

export type DietNutrients = {
	carbs: number;
	protein: number;
	fat: number;
	unit: string;
};

export type DietFood = {
	foodId: number;
	foodName: string;
	amount: number;
	unit: string;
	kcal: number;
};

// 물 섭취 현황 조회
export type WaterStatusResponse = {
	userId: number;
	date: string;
	currentWater: number;
	targetWater: number;
	unit: string;
	remainingCups: number;
	achievementRate: number;
};

// 물 섭취 기록
export type WaterRecordRequest = {
	addAmount: number;
};

export type WaterRecordResponse = {
	currentWater: number;
	achievementRate: number;
};

// 체중 현황 조회
export type WeightStatusResponse = {
	currentWeight: number;
	targetWeight: number;
	remainingWeight: number;
	achievementRate: number;
};

// 체중 기록
export type WeightRecordRequest = {
	date: string;
	weight: number;
};

export type WeightRecordResponse = {
	weightId: number;
	weight: number;
	recordedAt: string;
};
