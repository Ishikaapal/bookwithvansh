import NavBar from "../components/navbar/NavBar"
import Hero from "../components/main/Hero"
import About from "../components/main/About"
import Services from "../components/main/Services"
import WhyUs from "../components/main/WhyUs"
import Testimonials from "../components/main/Testimonials"
import Contact  from "../components/main/Contact"
import Footer  from "../components/footer/Footer"
const Home = () => {
    return (
        <>
        <NavBar/>

        <main>
            <section id="hero"> <Hero/> </section>
            <section id="about"> <About/> </section>
            <section id="services"> <Services/> </section>
            <section id="whyus"> <WhyUs/> </section>
            <section id="testimonials"> <Testimonials/> </section>
            <section id="contact"> <Contact/> </section>
            
        </main>


        <Footer/>
        </>
    )
}

export default Home;