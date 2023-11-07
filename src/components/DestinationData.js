import "./destination_style.css";


export default function DestinationData(props){
    return(
        <>
        
        <div className={props.cName}>
            <div className="des-text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className="image">
                <img alt="aba" src={props.one}/>
                <img alt="bab" src={props.two}/>
            </div>
        </div>
        </>
    );
}