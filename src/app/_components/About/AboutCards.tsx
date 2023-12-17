import ProgressionImg from "@/assets/images/who-we-are/progresion.png"
import WorkoutImg from "@/assets/images/who-we-are/workout.png"
import NutritionImg from "@/assets/images/who-we-are/nutritions.png"
import Image from "next/image"

const cardList = [
    {
        img: ProgressionImg,
        title: "Progression",
        description:
            "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
    },
    {
        img: WorkoutImg,
        title: "Workout",
        description:
            " With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
    },
    {
        img: NutritionImg,
        title: "Nutritions",
        description:
            "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
    },
]

const AboutCards = () => {
    return (
        <>
            {cardList.map((card, id) => (
                <div
                    key={id}
                    className="flex flex-col text-black hover:text-white cursor-pointer bg-white justify-center py-3 lg:py-6 px-5 lg:px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[340px] w-full card-item-div sm:min-h-[300px] max-w-[400px] mx-auto"
                >
                    <Image
                        src={card.img}
                        alt="box_img"
                        width={50}
                        className="mb-4"
                    />
                    <p className=" text-[20px]  font-bold uppercase mb-7">
                        {card.title}
                    </p>
                    <p className="text-[14px]  font-medium leading-2 w-full">
                        {card.description}
                    </p>
                </div>
            ))}
        </>
    )
}

export default AboutCards
