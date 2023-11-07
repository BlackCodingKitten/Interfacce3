import "./hero_style.css";



export default function Hero(props){
    return(
        <div className={props.cName}>
            <img className="img" alt="HerpImage" src={props.src}/>
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>  
                <a href={props.href} className={props.btnClass}>{props.btnName}</a>
            </div>
        </div>

    );
}