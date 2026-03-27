import { http } from "@/infra/http/http-client";
import type { RecommendationDTO } from "../types/dto/RecommendationsDTO";

export async function getRecommendations(): Promise<RecommendationDTO>{
			const responseData = await http.get<RecommendationDTO>('follow/recommendations')
			return responseData
}
