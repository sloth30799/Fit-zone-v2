import Image from "next/image"
import Button from "../UIComponents/Button"
import heroImg from "@/assets/images/hero/hero-img.jpg"

const Hero = () => {
    return (
        <section className="container grid grid-flow-col grid-cols-1 mx-auto my-6 lg:my-12 md:grid-cols-2">
            <div className="flex flex-col col-span-2 gap-3 p-3 md:p-6 lg:p-12 md:col-span-1">
                <h5 className="self-start px-2 my-3 text-sm border rounded-full text-primary border-primary drop-shadow-sm">
                    Find Your Energy {">>>"}
                </h5>
                <div className="text-2xl leading-10 lg:text-3xl">
                    <h1>Transform Your Body</h1>
                    <h1>Transform Your Life</h1>
                </div>
                <Button className="my-8 secondary-btn">Our Classes</Button>
            </div>
            <div className="hidden col-span-1 py-3 md:block md:py-6 lg:py-12">
                <Image src={heroImg} alt="Image" className="mx-auto w-[80%]" />
            </div>
        </section>
    )
}

export default Hero
