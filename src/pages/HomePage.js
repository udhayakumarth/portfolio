import IntroBanner from "../components/IntroBanner"
import ExperienceBanner from "../components/ExperienceBanner"
import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Articals from "../components/Articals"

export default function HomePage() {
    return (
        <div>
            <IntroBanner />
            <AboutMe />
            <ExperienceBanner />
            <Projects />
            <Articals />
            <Footer />
        </div>
    )
}