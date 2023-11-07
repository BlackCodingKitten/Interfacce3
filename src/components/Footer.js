import "./footer_style.css"


export default function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Verne</h1>
                    <p>My GitHub Link is actually my github, all the others are just Jules Verne Books' Wikipedia pages.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Partner</h4>
                    <a href="https://github.com/BlackCodingKitten">My GitHub</a>
                    <a href="https://en.wikipedia.org/wiki/Journey_to_the_Center_of_the_Earth">Journey to the Center of the Earth</a>
                    <a href="https://en.wikipedia.org/wiki/The_Mysterious_Island">The Mysterious Island</a>
                    <a href="https://en.wikipedia.org/wiki/Twenty_Thousand_Leagues_Under_the_Seas">Twenty Thousand Leagues Under the Sea</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="https://en.wikivoyage.org/wiki/Around_the_World_in_Eighty_Days">Around the World in Eighty Days</a>
                    <a href="https://en.wikipedia.org/wiki/From_the_Earth_to_the_Moon">From the Earth to the Moon</a>
                    <a href="https://it.wikipedia.org/wiki/I_figli_del_capitano_Grant">The Children of Captain Gran</a>
                    <a href="https://en.wikipedia.org/wiki/The_Begum%27s_Fortune">The Begum's Fortune</a>
                </div>
                <div>
                    <h4>Other</h4>
                    <a href="https://it.wikipedia.org/wiki/Michele_Strogoff">Michael Strogoff</a>
                    <a href="https://en.wikipedia.org/wiki/The_Steam_House">The Steam House</a>
                    <a href="https://en.wikipedia.org/wiki/Robur_the_Conqueror">Robur the Conqueror</a>
                    <a href="https://en.wikipedia.org/wiki/Master_of_the_World_(novel)">Master of the World</a>
                </div>
                <div>
                    <h4>Project</h4>
                    <a href="https://en.wikipedia.org/wiki/The_Carpathian_Castle">The Castle of the Carpathians</a>
                    <a href="https://en.wikipedia.org/wiki/Facing_the_Flag">Facing the Flag</a>
                    <a href="https://en.wikipedia.org/wiki/The_Will_of_an_Eccentric">The Will of an Eccentric</a>
                </div>
            </div>
        </div>
    );
}