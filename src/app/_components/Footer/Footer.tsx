import Link from "next/link"
import Image from "next/image"
import Button from "../UIComponents/Button"

import logo from "@/assets/images/logo/logo.svg"
import facebook from "@/assets/icons/facebook.svg"
import instagram from "@/assets/icons/instagram.svg"
import twitter from "@/assets/icons/twitter.svg"

const socialLinks = [
    {
        src: twitter,
        alt: "twitter",
        link: "/",
    },
    {
        src: facebook,
        alt: "facebook",
        link: "/",
    },
    {
        src: instagram,
        alt: "instagram",
        link: "/",
    },
]

const Footer = () => {
    return (
        <footer className="w-full pt-2 pb-4 text-white bg-black lg:pt-8 rounded-t-2xl">
            <section className="container px-3 mx-auto lg:px-0">
                <section className="grid grid-flow-row my-6 lg:grid-cols-3 lg:grid-flow-col lg:my-12 bg-slate-800">
                    <div className="col-span-1 p-6 pt-12">
                        <h4 className="text-xl">Need a fitness Trainer?</h4>
                        <h4>
                            <span className="text-red-600">Call: </span>{" "}
                            +555-251-5287
                        </h4>
                        <Button className="my-6 primary-btn">
                            Purchase Now
                        </Button>
                    </div>
                    <div className="col-span-2">{/* img */}</div>
                </section>

                <section className="grid grid-flow-col grid-cols-2">
                    <div className="col-span-1">
                        <Image src={logo} alt="logo" width={140} />
                        <p className="text-sm w-[350px] my-3">
                            Take your health and body to the next level with our
                            comprehensive program designed to help you reach
                            your fitness goals.
                        </p>
                        <div className="flex items-center gap-1 my-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.alt}
                                    href={social.link}
                                    className="border border-slate-500 rounded-[8px] p-[2px] bg-gray-200"
                                >
                                    <Image
                                        src={social.src}
                                        alt={social.alt}
                                        width={20}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 justify-self-end w-[500px]"></div>
                </section>

                <hr />

                <section className="grid grid-flow-row py-1 md:grid-cols-2 md:grid-flow-col">
                    <div className="flex items-center col-span-1 gap-3">
                        <span className="text-[12px] text-[#606060] cursor-default">
                            © 2023 FitZone
                        </span>
                        <span className="text-[12px] text-[#606060] cursor-default">
                            Terms of Service
                        </span>
                        <span className="text-[12px] text-[#606060] cursor-default">
                            Privacy & Cookies policy
                        </span>
                    </div>
                    <div className="col-span-1 md:justify-self-end">
                        <span className="text-[12px] text-[#A1A1A1] hover:text-primary">
                            sloth30799@dev
                        </span>
                    </div>
                </section>
            </section>
        </footer>
    )
}

export default Footer
