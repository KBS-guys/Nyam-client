import { AiCategoryType, AiRoleType, AiDeleteFlagType } from "./common";

// AI 페이지 관련 API 타입 정의

// 과거 대화 리스트 조회
export type AiHistoryListResponse = AiHistoryListItem[];

export type AiHistoryListItem = {
	historyId: number;
	previewContent: string;
	category: AiCategoryType;
	createdAt: string;
};

// 과거 대화 내역 조회
export type AiHistoryDetailPath = {
	historyId: number;
};

export type AiHistoryDetailResponse = {
	historyId: number;
	userId: number;
	role: AiRoleType;
	content: string;
	category: AiCategoryType;
	analysisData: AiAnalysisData;
	createdAt: string;
	isDeleted: AiDeleteFlagType;
};

export type AiAnalysisData = {
	kcal: number;
	carbs: number;
	protein: number;
	fat: number;
};

// AI 질문 전송 및 답변 생성
export type AiChatRequest = {
	userId: number;
	message: string;
	category: AiCategoryType;
};

export type AiChatResponse = {
	historyId: number;
	requestMessage: string;
	responseMessage: string;
	aiRecommendation: AiRecommendation;
	createdAt: string;
};

export type AiRecommendation = {
	nextAction: string;
	waterTargetAdd: number;
};
