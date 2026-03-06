// 공용으로 사용하는 타입 정의
export type ApiSuccess<T> = {
	code: number;
	message: string;
	data: T;
};

export type ApiFailure<E = FieldError[]> = {
	code: number;
	message: string;
	data?: never;
	errors?: E;
};

export type ApiResponse<T, E = FieldError[]> = ApiSuccess<T> | ApiFailure<E>;

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

export type FieldError = {
	field: string;
	reason: string;
};

export type DietSetFoodInput = {
	foodId: number;
	amount: number;
	unit: string;
};

export type DietSetFood = {
	foodId: number;
	foodName: string;
	amount: number;
	unit: string;
	kcal: number;
};

export type AiCategoryType = "FOOD" | "WATER" | "WEIGHT";

export type AiRoleType = "assistant" | "user";

export type AiDeleteFlagType = "Y" | "N";
