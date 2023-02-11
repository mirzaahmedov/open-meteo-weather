import { getDailyForecastQuery } from "@/api/queries/forecast"
import { useQuery } from "@tanstack/react-query"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import Card from "@/components/Card"
import Text from "@/components/Text"
import Chart from "@/components/Chart"

const Home = () => {
	const { data } = useQuery({
		queryKey: ["daily"],
		queryFn: getDailyForecastQuery,
	})

	return (
	<main>
			<section>
				<Text variant="bs-bold">DAILY</Text>
				<Swiper style={{ padding: 20 }} spaceBetween={10} slidesPerView={"auto"}>
					{Array.isArray(data?.daily.time) ? data?.daily.time.map((day, index) => <SwiperSlide style={{ maxWidth: 148 }}><Card variant="sm" data={{ weatherType: "0", date: (new Date(day)).toLocaleDateString(), temperature: { evening: 2.0, daytime: data.daily.temperature_2m_max[index] } }} /></SwiperSlide>): null}
				</Swiper>
			</section>
			<section>
				<Text>HOURLY</Text>
				<Chart />
			</section>
	</main>
	)
}

export default Home
