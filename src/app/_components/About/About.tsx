import React from "react"
import AboutCards from "./AboutCards"
import TitleRed from "@/assets/images/who-we-are/title-bg.svg"
import TrainersIcon from "@/assets/images/who-we-are/weightlifter.png"
import ModernIcon from "@/assets/images/who-we-are/equpments.png"
import LiftIcon from "@/assets/images/who-we-are/gym.png"
import GirlRunning from "@/assets/images/who-we-are/girl-run.png"
import GirlRedBg from "@/assets/images/who-we-are/girl-redbg.svg"
import GirlText from "@/assets/images/who-we-are/girl-side-text.png"
import GirlWind from "@/assets/images/who-we-are/wind.png"
import Image from "next/image"

const About = () => {
    return (
        <section className="flex flex-col justify-between gap-2 about-section pb-[10rem] mt-[8rem] px-12">
            <div className="container mx-auto">
                <div className="flex gap-3 lg:gap-10 -mt-[8.5rem] flex-col lg:flex-row">
                    <AboutCards />
                </div>

                <div className="grid lg:grid-cols-2 gap-[3rem] grid-cols-1 ">
                    {/* about text */}
                    <div className="mt-[8rem] relative items-center flex flex-col text-center w-[full]">
                        <h5 className="text-white text-[14px] relative uppercase z-10 mb-12">
                            who we are
                        </h5>
                        <Image
                            src={TitleRed}
                            alt="text_bg"
                            className="w-[31%] absolute -top-[6px] md1000:w-[22rem]"
                        />
                        <h2 className="text-[35px] text-primary leading-tight mb-6  ">
                            Take Your Health And Body To Next Level
                        </h2>
                        <p className="text-[16px] text-[#646464] font-medium ">
                            Take your health and body to the next level with our
                            comprehensive program designed to help you reach
                            your fitness goals.
                        </p>
                        {/* about text icons */}
                        <div className="flex flex-col justify-between w-full gap-3 py-12 text-black md:flex-row">
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src={TrainersIcon}
                                    alt="icon_img"
                                    width={40}
                                    className={`mb-6 h-auto`}
                                />
                                <h3 className="uppercase font-bold text-[18px] tracking-wide">
                                    professional <br /> trainers
                                </h3>
                            </div>
                            <div className="border-l border-slate-200"></div>
                            <div className="flex flex-col items-center justify-center ">
                                <Image
                                    src={ModernIcon}
                                    alt="icon_img"
                                    width={40}
                                    className={`mb-6 h-auto`}
                                />
                                <h3 className="uppercase font-bold text-[18px] tracking-wide">
                                    modern <br /> equipments
                                </h3>
                            </div>
                            <div className="border-l border-slate-200"></div>
                            <div className="flex flex-col items-center justify-center ">
                                <Image
                                    src={LiftIcon}
                                    alt="icon_img"
                                    width={40}
                                    className={`mb-6 h-auto`}
                                />
                                <h3 className="uppercase font-bold text-[18px] tracking-wide">
                                    fancy gym <br />
                                    machines
                                </h3>
                            </div>
                        </div>
                        {/* cta button */}
                        {/* <MainButton
              color={`!text-white`}
              bg={`bg-[#3f3f3f]`}
              cN="about-cta"
              arrowColor={`!text-white`}
              hover={`hover:bg-[#FF0336]`}
              text="take a tour"
              goTo="/classes"
            /> */}
                    </div>
                    {/* img side */}
                    <div className="relative hidden lg:block">
                        <Image
                            src={GirlRunning}
                            alt="girl_running"
                            className="girl-running"
                        />
                        <Image
                            src={GirlRedBg}
                            alt="bg-red"
                            className="girl-bg"
                        />
                        <Image
                            src={GirlText}
                            alt="bg-text"
                            className="girl-text"
                        />
                        <Image
                            src={GirlWind}
                            alt="bg-wind"
                            className="girl-wind"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
