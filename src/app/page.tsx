import Header from "./_components/Header/Header"
import Footer from "./_components/Footer/Footer"

import Hero from "./_components/Hero/Hero"
import About from "./_components/About/About"
import Schedule from "./_components/Schedule/Schedule"
import Banner from "./_components/Banner/Banner"
import Gallery from "./_components/Gallery/Gallery"

export default function Home() {
    return (
        <>
            <Header />
            <main className="container px-3 mx-auto">
                <Hero />
                <About />
                <Schedule />
                <Banner />
                <Gallery />
            </main>
            <Footer />
        </>
    )
}
