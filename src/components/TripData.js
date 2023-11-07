import "./trip_style.css";

export default function TripData(props){
    return(
        <div className={props.nameCss}>
            <div className="t-image">
                <img alt={props.src} src={props.src}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}