import TitleWithBorder from "../UIComponents/TitleWithBorder"
import { dates, classesData } from "./data"

const styles = {
	date: `flex items-center justify-center h-[40px] rounded-sm cursor-pointer`,
	class: `flex flex-col items-center justify-center h-[60px] rounded-sm px-1 text-center text-[12px] font-bold`,
}

const Schedule = () => {
	const today = new Date().getDay()

	const titleColor = (index: number) => {
		if (index === 0)
			return "bg-transparent text-primary underline corners-box"

		return today === index
			? "bg-primary text-white"
			: "bg-slate-400 text-white"
	}

	const renderClasses = classesData.map((data, index) => (
		<div
			key={index}
			className="grid grid-cols-7 gap-1 mx-auto w-[1000px] mt-1"
		>
			<div
				className={`col-span-1 ${styles.class} border border-black rounded-sm bg-slate-50 cursor-default pt-1`}
			>
				{data.name}
			</div>
			{dates.map((d, i) => {
				if (d === "Classes") return
				if (data.days.includes(d)) {
					return (
						<div
							key={i * 100}
							className={`col-span-1 ${styles.class} border border-black rounded-sm cursor-pointer bg-slate-50 hover:bg-slate-100 hover:text-primary`}
						>
							<span className="pt-1">{data.instructor}</span>
							<span className="pt-1">{data.time}</span>
						</div>
					)
				} else {
					return (
						<div
							key={i * 100}
							className={`col-span-1 ${styles.class} border border-black rounded-sm cursor-pointer bg-slate-50 hover:bg-slate-100 hover:text-primary`}
						></div>
					)
				}
			})}
		</div>
	))

	return (
		<section className="py-6 text-black bg-white full-bleed-white">
			<div className="flex justify-center items-center">
				<TitleWithBorder className="my-3">
					OUR SCHEDULE
				</TitleWithBorder>
			</div>
			<h4 className="text-2xl text-center">Check Our Classes Schedule</h4>

			<div className="grid grid-cols-7 gap-1 mx-auto w-[1000px] mt-3 text-sm">
				{dates.map((date, index) => (
					<div
						key={date}
						className={`col-span-1 pt-1 ${styles.date} ${titleColor(
							index
						)}`}
					>
						{date}
					</div>
				))}
			</div>

			{renderClasses}
		</section>
	)
}

export default Schedule
