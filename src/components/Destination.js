import ImageSRC1 from  "../asserts/description1.jpg";
import ImageSRC2 from  "../asserts/description2.jpg";
import ImageSRC3 from  "../asserts/description3.jpg";
import ImageSRC4 from  "../asserts/description4.jpg";
import DestinationData from "./DestinationData";
export default function Destination(){
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>The most romantic destinations</p>
            <DestinationData 
            cName="first-des"
            title="Great Barrier Island, New Zealand" 
            text="Imagine strolling hand in hand along the pristine shores of Great Barrier Island, the rhythmic melody of gentle waves serenading your every step. The golden sun dips below the horizon, casting hues of pink and orange across the vast canvas of the evening sky. As you breathe in the salty sea air, you feel a connection not just to each other, but to the untamed beauty that surrounds you."
            one={ImageSRC1}
            two={ImageSRC2} />
            <DestinationData 
            cName="first-des-reverse"
            title="Neil Island, India" 
            text="Amidst the tranquility, the murmur of the Andaman Sea sets a soothing backdrop, creating an intimate symphony for you and your loved one. As you explore the secluded corners of the island, lush greenery and the fragrance of tropical blooms envelop you. Here, stolen glances turn into stolen moments in the embrace of nature's allure."
            one={ImageSRC3}
            two={ImageSRC4} />
        </div>
    );
}