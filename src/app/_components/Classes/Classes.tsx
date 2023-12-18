import Image from "next/image"

import titleBg from "@/assets/images/title-bg.svg"

const Classes = () => {
    return (
        <section className="py-6 -mt-1 bg-white full-bleed-white">
            <h1 className="my-3 text-center text-primary">CHOOSE YOUR CLASS</h1>
            <Image src={titleBg} alt="" />
            <h1 className="text-2xl text-center text-black">
                We Are Offering Best Flexible Classes
            </h1>
        </section>
    )
}

export default Classes
