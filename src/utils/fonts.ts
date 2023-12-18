import { Tilt_Warp, Noto_Sans_Syriac_Eastern } from "next/font/google"

export const tiltWarp = Tilt_Warp({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-tiltWarp",
})

export const notoSans = Noto_Sans_Syriac_Eastern({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-notoSans",
})
