import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo/logo.svg"
import weightLifting from "@/assets/icons/Weightlifitng.svg"

const Header = () => {
    return (
        <header className="w-2/3 py-2 px-2 drop-shadow mx-auto my-3 text-text bg-background border-2 border-[#E8E8E8]">
            <nav className="flex items-center justify-between font-body">
                <Image src={logo} alt="logo" width={100} />

                <ul className="flex gap-3">
                    <Link href="/" className="text-sm underline-animation">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm underline-animation">
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm underline-animation"
                    >
                        {" "}
                        Contact
                    </Link>
                </ul>

                <Link
                    href="/"
                    className="text-[12px] flex items-center gap-2 bg-primary text-white px-2 py-1
                    hover:bg-red-700"
                >
                    <Image src={weightLifting} alt="weightLifting" width={18} />
                    <span className="mt-1">JOIN NOW</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header
