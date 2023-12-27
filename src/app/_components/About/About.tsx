import Image from "next/image"

import TagBox from "../UIComponents/TagBox"
import AboutCards from "./AboutCards"

import TrainersIcon from "@/assets/images/who-we-are/weightlifter.png"
import ModernIcon from "@/assets/images/who-we-are/equpments.png"
import LiftIcon from "@/assets/images/who-we-are/gym.png"
import Button from "../UIComponents/Button"

const About = () => {
    return (
        <>
            <section className="flex justify-center gap-8 py-6 bg-black full-bleed-black">
                <AboutCards />
            </section>

            <section className="grid grid-cols-2 py-12 text-white">
                <div className="flex flex-col col-span-1 gap-4 w-[75%]">
                    <TagBox className="m-3">WHO WE ARE</TagBox>
                    <h4 className="text-2xl leading-tight">
                        Take Your Health And Body To Next Level
                    </h4>
                    <p className="text-[14.5px] text-gray-500">
                        Take your health and body to the next level with our
                        comprehensive program designed to help you reach your
                        fitness goals.
                    </p>

                    <div className="flex items-center justify-center gap-3">
                        <div className="flex flex-col items-center justify-center gap-2 py-3 pr-3">
                            <Image src={TrainersIcon} alt="icon" width={44} />
                            <h5 className="text-center text-md">
                                PROFESSIONAL TRAINERS
                            </h5>
                        </div>

                        <div className="border border-gray-300 h-1/2"></div>

                        <div className="flex flex-col items-center justify-center gap-2 p-3 py-3">
                            <Image src={ModernIcon} alt="icon" width={44} />
                            <h5 className="text-center text-md">
                                MODERN EQUIPMENTS
                            </h5>
                        </div>

                        <div className="border border-gray-300 h-1/2"></div>

                        <div className="flex flex-col items-center justify-center gap-2 py-3 pl-3">
                            <Image src={LiftIcon} alt="icon" width={44} />
                            <h5 className="text-center text-md">
                                FANCY GYM MACHINES
                            </h5>
                        </div>
                    </div>

                    <Button className="primary-btn">Take A Tour</Button>
                </div>
            </section>
        </>
    )
}

export default About
