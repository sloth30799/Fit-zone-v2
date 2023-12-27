import TitleWithBg from "../UIComponents/TitleWithBg"
import ClassCards from "./ClassCards"

const Classes = () => {
    return (
        <section className="py-6 -mt-1 bg-white full-bleed-white">
            <TitleWithBg className="my-3 mb-9">CHOOSE YOUR CLASS</TitleWithBg>
            <h1 className="text-2xl text-center text-black">
                We Are Offering Best Flexible Classes
            </h1>

            <ClassCards />
        </section>
    )
}

export default Classes
