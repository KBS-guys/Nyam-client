import type { DietSetFood, DietSetFoodInput, FieldError } from "./common";

// 프로필 페이지 관련 API 타입 정의

// 내 정보 불러오기
export type MyProfileResponse = {
	userId: number;
	userName: string;
	targetWeight: number;
	currentWeight: number;
	height: number;
	birthDate: string;
	gender: string;
	activityLevel: string;
	dietType: string;
};

// 내 정보 수정
export type UpdateMyProfileRequest = {
	targetWeight: number;
	currentWeight: number;
	height: number;
	activityLevel: string;
	dietType: string;
};

export type UpdateMyProfileResponse = {
	userId: number;
	updatedAt: string;
};

// 영양정보 불러오기
export type MyNutritionResponse = {
	userId: number;
	targetKcal: number;
	targetCarbs: number;
	targetProtein: number;
	targetFat: number;
	targetWater: number;
};

// 영양정보 수정
export type UpdateMyNutritionRequest = {
	targetKcal: number;
	targetCarbs: number;
	targetProtein: number;
	targetFat: number;
	targetWater: number;
};

export type UpdateMyNutritionResponse = {
	userId: number;
	updatedAt: string;
};

// 영양정보 수정
export type UpdateMyNutritionError = FieldError;

// 식단 세트 리스트 불러오기
export type MyDietSetListResponse = MyDietSetListItem[];

export type MyDietSetListItem = {
	setId: number;
	setName: string;
	totalKcal: number;
	items: DietSetFood[];
};

// 식단 세트 수정
export type UpdateMyDietSetPath = {
	setId: number;
};

export type UpdateMyDietSetRequest = {
	setName: string;
	items: DietSetFoodInput[];
};

export type UpdateMyDietSetResponse = {
	setId: number;
	updatedAt: string;
};

// 식단 세트 수정
export type UpdateMyDietSetError = FieldError;
