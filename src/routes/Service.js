import "./service_style.css"
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import ImageSrc from "../asserts/Service.jpg"
import Footer from '../components/Footer';
import Trip from '../components/Trip';

import src1 from "../asserts/service1.png";
import src2 from "../asserts/service2.jpg";
import src3 from "../asserts/service3.png";
export default function Service(){
    const dataList=[
        {src:src1,
        title: "Luxury Plan ",
        text: <><ul><li>- 20000$ per year</li><li>- Four 5 stars trips per year</li> <li>- Photograpers and Videomakers follows you during your adventure</li><li>-Two Luxury dinners in the best restaurant on each Trip</li></ul><br></br><h4>Description:</h4><p>Experience opulent accommodations, curated experiences, and exquisite destinations, creating unforgettable moments tailored to elevate your journey together. Explore the epitome of romance with our meticulously crafted plan designed for the discerning couple seeking lavish escapes.</p> </>
    },
    {src: src2, 
    title: "Family Plan",
    text:<><ul><li>- 1200$ per year</li><li>- Two amazing trips per year</li> <li>- Theme Park guaranteed</li><li>- Activities for all</li><li>- Babysitting service available</li><li>- Include one family dinner </li></ul><br></br><h4>Description:</h4><p>Enjoy exclusive travel perks, discounts on accommodations, and curated itineraries tailored for family adventures. Create lasting memories together without breaking the bank. Travel smart, travel as a family.</p> </>},
    {src: src3, 
    title: "Honeymoon",
    text: <><ul><li>- Start Price: 4000$</li><li>- From one Week period to Three month experience</li> <li>- Romantic room with spa</li><li>- Romantic Couple Activities</li><li></li><li>- Photographer and Videomaker available</li></ul><br></br><h4>Description:</h4><p>Enjoy exclusive travel perks, discounts on accommodations, and curated itineraries tailored for family adventures. Create lasting memories together without breaking the bank. Travel smart, travel as a family.</p> </>}
    ];

    return(
        <div className='Service'>
            <NavBar/>
            {/* <h1>This is Service</h1> */}
            <Hero
                cName="hero-mid"
                src= {ImageSrc}
                title="Service"
                btnClass="hide"

            />
            <div className="Plan">
                <Trip nameCss="t-card-clickable"  title="Choose Your Plan"
                    dataList={dataList}
                />
            </div>
            <Footer/>
        </div>
    );
}