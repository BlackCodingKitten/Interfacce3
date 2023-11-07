import TripData from "./TripData";
import "./trip_style.css";


export default function Trip({title,nameCss, dataList=[]}){
    return(
        <div className="trip">
            <h1>{title}</h1>
            
            <div className="trip-card">
                {dataList.map((item,index)=>{
                    return(
                        <TripData key={index}  nameCss={nameCss} heading={item.title} src={item.src} text={item.text}/>
                    );
                })}
            </div>

        </div>
    );
}
