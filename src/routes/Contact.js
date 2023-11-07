import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import ImageSrc from "../asserts/Contact us.jpg";
import Footer from '../components/Footer';
import ContactForm from '../components/ConatactForm';

export default function Contact(){
    return(
        <>
            <NavBar/>
            {/* <h1>This is Contact</h1> */}
            <Hero
                cName="hero-mid"
                src= {ImageSrc}
                title="Contact"
                btnClass="hide"

            />
            <ContactForm/>
            <Footer/>
        </>
    );
}