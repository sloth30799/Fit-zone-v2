import Image from "next/image"

import ProgressionImg from "@/assets/images/who-we-are/progresion.svg"
import WorkoutImg from "@/assets/images/who-we-are/workout.svg"
import NutritionImg from "@/assets/images/who-we-are/nutritions.svg"

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
            {cardList.map((card) => (
                <div
                    className=" p-6 px-4 border rounded-lg bg-gray-800 hover:bg-slate-100 hover:text-black border-primary max-w-[300px] duration-300"
                    key={card.title}
                >
                    <Image src={card.img} alt={card.title} width={40} />
                    <h4 className="my-2 text-[20px] text-primary">
                        {card.title}
                    </h4>
                    <p className="leading-tight text-[13px]">
                        {card.description}
                    </p>
                </div>
            ))}
        </>
    )
}

export default AboutCards
