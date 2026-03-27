import { useEffect, useState } from "react";
import type { RecommendationDTO } from "../types/dto/RecommendationsDTO";
import { getRecommendations } from "../services/follow.service";

export function useRecommendations() {
	const [recommendations, setRecommendations] = useState<RecommendationDTO | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		const fetchRecommendations = async () => {
			setIsLoading(true)

			const responseData = await getRecommendations()
				setRecommendations(responseData)

			setIsLoading(false)
		}
		fetchRecommendations()
	}, [])

	return{
		recommendations,
		isLoading
	}
}
