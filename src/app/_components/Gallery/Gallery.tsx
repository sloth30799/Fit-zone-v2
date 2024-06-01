import TitleWithBorder from "../UIComponents/TitleWithBorder"

const Gallery = () => {
	return (
		<section className="py-6 text-center text-black bg-white full-bleed-white">
			<div className="flex justify-center items-center">
				<TitleWithBorder className="my-3">
					FITNESS GALLERY
				</TitleWithBorder>
			</div>
			<h4 className="mb-2 text-xl">Our Workplace Gallery</h4>
			<p className="text-[12px]">
				{`Our Workplace Gallery features modern office, team
                collaboration, and fun culture.`}
			</p>
			<p className="text-[12px]">
				{`Attracts talents and showcases
                company's work atmosphere.`}
			</p>

			<section className="grid grid-cols-3 gap-1 w-[1000px] mx-auto mt-3">
				<div className="col-span-2 h-[250px] bg-black">Images</div>
				<div className="col-span-1 h-[250px] bg-black">Images</div>
				<div className="col-span-1 h-[250px] bg-black">Images</div>
				<div className="col-span-2 h-[250px] bg-black">Images</div>
			</section>
		</section>
	)
}

export default Gallery
