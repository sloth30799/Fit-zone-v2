import Button from "../UIComponents/Button"

const Banner = () => {
    return (
        <section className="grid grid-flow-col gap-6 py-6 text-white">
            <div className="col-span-1 text-center justify-self-center">
                <span className="text-[14px]">MEET THE TRAINERS</span>
                <h2 className="text-2xl">BOOK CLASS</h2>
                <p className="text-[12px]">
                    Know About Special Offer And New Training
                </p>
                <Button className="mt-3 primary-btn">JOIN NOW</Button>
            </div>
            <div className="col-span-1 text-center justify-self-center">
                <span className="text-[14px]">COME TRAIN WITH US</span>
                <h2 className="text-2xl">30% OFF</h2>
                <p className="text-[12px]">
                    This offer is for A Limited Time Only
                </p>
                <Button className="mt-3 primary-btn">JOIN NOW</Button>
            </div>
        </section>
    )
}

export default Banner
