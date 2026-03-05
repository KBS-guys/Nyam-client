import type {
	DietSetItem,
	DietSetRequestItem,
	MealType,
	ValidationError,
} from "./common";

// 검색 페이지 관련 API 타입 정의

// 최근검색 불러오기
export type RecentSearchResponse = RecentSearchItem[];

export type RecentSearchItem = {
	searchId: number;
	keyword: string;
	createdAt: string;
};

// 최근 검색 삭제
export type DeleteRecentSearchPath = {
	searchId: number;
};

export type DeleteRecentSearchResponse = {
	deletedSearchId: number;
};

// 즐겨찾기 목록 불러오기
export type FavoriteListResponse = FavoriteItem[];

export type FavoriteItem = {
	favoriteId: number;
	foodId: number;
	foodName: string;
	brand: string;
	kcal: number;
	unit: string;
};

// 즐겨찾기 등록하기
export type CreateFavoriteRequest = {
	foodId: number;
};

export type CreateFavoriteResponse = {
	favoriteId: number;
	foodId: number;
	favoritedAt: string;
};

// 즐겨찾기 삭제
export type DeleteFavoritePath = {
	favoriteId: number;
};

export type DeleteFavoriteResponse = {
	favoriteId: number;
	unfavoritedAt: string;
};

// 식단 세트 등록하기
export type CreateDietSetRequest = {
	setName: string;
	items: DietSetRequestItem[];
};

export type CreateDietSetResponse = {
	setId: number;
	setName: string;
	createdAt: string;
};

// 식단 세트 불러오기
export type DietSetPath = {
	setId: number;
};

export type DietSetResponse = {
	setId: number;
	setName: string;
	totalKcal: number;
	items: DietSetItem[];
};

// 음식 검색
export type FoodSearchQuery = {
	keyword: string;
};

export type FoodSearchResponse = FoodSearchItem[];

export type FoodSearchItem = {
	foodId: number;
	foodName: string;
	kcal: number;
	carbs: number;
	protein: number;
	fat: number;
	brand: string;
};

// 음식 상세 정보 불러오기
export type FoodDetailPath = {
	foodId: number;
};

export type FoodDetailResponse = {
	foodId: number;
	foodName: string;
	kcal: number;
	carbs: number;
	protein: number;
	fat: number;
	servingSize: number;
	unit: string;
};

// 식사 등록하기
export type CreateDietRequest = {
	userId: number;
	date: string;
	mealType: MealType;
	items: CreateDietItem[];
};

export type CreateDietItem = {
	foodId: number;
	foodName: string;
	intakeAmount: number;
	unit: string;
};

export type CreateDietResponse = {
	dietGroupId: number;
	recordedAt: string;
};

// 음식 직접 등록하기
export type CreateCustomFoodRequest = {
	foodName: string;
	brand: string;
	servingSize: number;
	unit: string;
	kcal: number;
	carbs: number;
	protein: number;
	fat: number;
};

export type CreateCustomFoodResponse = {
	foodId: number;
	foodName: string;
	createdAt: string;
};

// 음식 직접 등록하기
export type CreateCustomFoodError = ValidationError;
