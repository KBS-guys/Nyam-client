// 공용으로 사용되는 타입들 정의
export type ServerSuccessResponse<T> = {
	code: number;
	message: string;
	data: T;
};

export type ServerFailResponse<T> = {
	code: number;
	message: string;
	data?: never;
	errors?: T;
};

export type ServerResponseType<T> =
	| ServerSuccessResponse<T>
	| ServerFailResponse<T>;

export type MealType = "MORNING" | "LUNCH" | "DINNER" | "SNACK";

export type NotificationType =
	| "DIET_REMINDER"
	| "WATER_REMINDER"
	| "GOAL_ACHIEVED";

export type AnalysisWeekdayType =
	| "월"
	| "화"
	| "수"
	| "목"
	| "금"
	| "토"
	| "일";

export type AnalysisPeriodType = "WEEKLY";

export type AnalysisNutrientType = "CARBS" | "PROTEIN" | "FAT" | "ETC";

export type ValidationError = {
	field: string;
	reason: string;
};

export type DietSetRequestItem = {
	foodId: number;
	amount: number;
	unit: string;
};

export type DietSetItem = {
	foodId: number;
	foodName: string;
	amount: number;
	unit: string;
	kcal: number;
};

export type AiCategoryType = "FOOD" | "WATER" | "WEIGHT";

export type AiRoleType = "assistant" | "user";

export type AiDeleteFlagType = "Y" | "N";
