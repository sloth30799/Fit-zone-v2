import Image from "next/image"
import Button from "../UIComponents/Button"

import facebook from "@/assets/icons/facebook.svg"
import instagram from "@/assets/icons/instagram.svg"
import twitter from "@/assets/icons/twitter.svg"

const Hero = () => {
    return (
        <section className="grid grid-flow-col grid-cols-2 py-24 leading-tight">
            <div className="col-span-1 ">
                <h1 className="text-3xl">Be Fit</h1>
                <h1 className="text-3xl text-primary">Be Stronger</h1>
                <p className="mt-1 text-lg">
                    Unleash the potential at our cutting-edge gym.
                </p>
                <p className="mt-1 text-lg">Elevate your fitness journey.</p>

                <div className="flex gap-6 mt-12 ml-3">
                    <Button className="secondary-btn">EXPLORE MORE</Button>
                    <Button className="secondary-btn">BE A MEMBER</Button>
                </div>
            </div>
            <div className="col-span-1 justify-self-end">
                <div className="flex flex-col gap-1">
                    <Image src={facebook} alt="icon" width={20} />
                    <Image src={instagram} alt="icon" width={20} />
                    <Image src={twitter} alt="icon" width={20} />
                </div>
            </div>
        </section>
    )
}

export default Hero
