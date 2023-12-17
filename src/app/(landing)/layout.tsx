import { ReactNode } from "react"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

const LandingPageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default LandingPageLayout
