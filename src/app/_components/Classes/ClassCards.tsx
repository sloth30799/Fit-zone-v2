import Image from "next/image"
import Button from "../UIComponents/Button"

import cycling from "@/assets/images/features/cycling.jpg"
import bikeRed from "@/assets/icons/bike-red.png"

const ClassCards = () => {
    return (
        <div className="class-card w-[340px] h-[340px] text-primary relative bg-white shadow-md-inner">
            <Image
                src={cycling}
                alt="cycling"
                className="absolute top-0 z-0 h-full"
            />
            <div className="flex items-center w-full pb-1 class-icon">
                <div className="bg-white w-[100px] h-[50px] px-3 rounded-r-full flex items-center justify-end">
                    <Image src={bikeRed} alt="bike" width={40} />
                </div>
            </div>
            <div className="w-full class-pop-up border-t border-primary h-[70%] bg-black px-3">
                <h4 className="my-3">Cycling</h4>
                <div className="grid grid-flow-row grid-cols-2 gap-3 text-white">
                    <h4 className="col-span-1 tag">
                        Wednesday: 9:00am-10:00am
                    </h4>
                    <h4 className="col-span-1 tag">
                        Wednesday: 9:00am-10:00am
                    </h4>
                    <Button className="col-span-2 mx-auto my-6 secondary-btn">
                        Register Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ClassCards
