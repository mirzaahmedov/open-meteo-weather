import { getDailyForecastQuery } from "@/api/queries/forecast"
import { useQuery } from "@tanstack/react-query"

const Home = () => {
const { data } = useQuery({
	queryKey: ["daily"],
	qeuryFn: getDailyForecastQuery,
	})
	return (
			<div>
				
			</div>
			)
}

export default Home
