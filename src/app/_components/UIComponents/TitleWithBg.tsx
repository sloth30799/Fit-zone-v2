import Image from "next/image"

import titleBg from "@/assets/images/title-bg.svg"

type TitleWithBgProps = {
    className?: String
    children: String
}

const TitleWithBg = ({ className, children }: TitleWithBgProps) => {
    return (
        <div className={`relative ${className}`}>
            <Image
                src={titleBg}
                alt=""
                className="absolute z-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={200}
            />
            <h1 className="absolute z-10  text-white text-[14px] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {children}
            </h1>
        </div>
    )
}

export default TitleWithBg
