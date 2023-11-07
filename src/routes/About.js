import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import ImageSrc from "../asserts/ourHistory3.jpg"
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';


export default function About(){
    return(
        <>
            <NavBar/>
            {/* <h1>This is About</h1> */}
            <Hero
                cName="hero-mid"
                src= {ImageSrc}
                title="About Us"
                btnClass="hide"

            />
            <AboutUs/>
            <Footer/>
        </>
    );
}