import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import ImageSrc from "../asserts/home.jpg"
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';



import image1 from "../asserts/card1.jpg";
import image2 from "../asserts/card2.jpg";
import image3 from "../asserts/card3.jpg";



export default function Home(){
    let dataList=[{src:image1,title:"Barcelona",text:"Stroll down La Rambla, the heartbeat of the city, hand in hand, as street performers serenade your love story. Explore the whimsical architecture of Gaudí, where each curve and color tell a tale of artistic devotion. Dine under the stars at a charming Catalan bistro, savoring the flavors of a city that dances on the taste buds."},{src:image2,title:"Dolomites Mountains",text:" A dreamy honeymoon in Venice, where the ancient city becomes a canvas for love. Glide along the quiet canals in a gondola, the serenade of the gondolier echoing your heart's melody. Lose yourselves in the narrow, winding streets, stumbling upon hidden gems and cozy cafes."},{src: image3, title:"Venice", text:"Wander hand in hand through alpine meadows adorned with wildflowers, the air crisp with the promise of adventure. As daylight fades, cozy up in a mountain chalet, the warmth of a crackling fire mirroring the glow in your hearts. "}];        

    return(
        <div className='homepage'>
            <NavBar/>
            {/* <h1>This is Home</h1> */}
            <Hero 
                cName="hero" 
                src={ImageSrc}
                title = "Your Journey Your Story"
                text = "Choose Your Favourite Destination."
                href="/service"
                btnClass="show"
                btnName="Travel Plan"
                />
            <Destination/>
            <Trip title={"Travel with your Partner as a Star"}                
               dataList={dataList}
               nameCss={"t-card"}
            />
            <Footer/>
        </div>
    );
}