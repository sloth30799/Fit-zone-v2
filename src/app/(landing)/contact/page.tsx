const page = () => {
	return (
		<section className="container mx-auto max-w-[1000px] grid grid-cols-2 py-4">
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2">
					<h4>We are here for help you! To Shape Your Body.</h4>
					<p className="text-sm">
						At Gymate, we are dedicated to helping you achieve the
						body of your dreams. Our expert trainers and
						nutritionists will work with you to create a
						personalized fitness and nutrition plan that helps you
						reach your specific goals.
					</p>
				</div>

				<div className="grid grid-cols-2 col-span-2 gap-4">
					<div className="p-3">
						<h6 className="text-sm font-semibold">
							New York City, USA
						</h6>
						<div className="w-1/4 bg-primary h-[4px] mb-4"></div>

						<p className="text-[12px]">
							85 Briston Mint Street, London, E1 8LG, USA
						</p>
					</div>
					<div className="p-3">
						<h6 className="text-sm font-semibold">Opening Hours</h6>
						<div className="w-1/4 bg-primary h-[4px] mb-4"></div>

						<p className="text-[12px]">
							Mon to Fri: 7:30 am — 1:00 am
							<br />
							Mon to Fri: 7:30 am — 1:00 am
						</p>
					</div>
					<div className="p-3">
						<h6 className="text-sm font-semibold">Information</h6>
						<div className="w-1/4 bg-primary h-[4px] mb-4"></div>

						<p className="text-[12px]">
							+800-123-4567 gymat@gymail.com
						</p>
					</div>
					<div className="p-3">
						<h6 className="text-sm font-semibold">Follow Us On</h6>
						<div className="w-1/4 bg-primary h-[4px] mb-4"></div>

						<p className="text-[12px]">
							85 Briston Mint Street, London, E1 8LG, USA
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="bg-green-400 p-3 grid grid-cols-1 gap-2">
					<div className="w-full">
						<h6 className="text-sm font-semibold">
							Leave us Your Info
						</h6>
						<div className="w-1/4 bg-primary h-[4px] mb-4"></div>
					</div>

					<input placeholder="Name" />
					<input placeholder="Email Address" />
					<input placeholder="Select Class" />
					<input placeholder="Comment" />

					<button>Submit Now</button>
				</div>
			</div>
		</section>
	)
}

export default page
