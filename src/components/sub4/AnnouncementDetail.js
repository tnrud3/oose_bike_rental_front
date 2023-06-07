import {useParams} from "react-router-dom";
import "./AnnouncementDetail.css"

export default function () {
    const params = useParams()
    return(
        <div className="container">
            <h2>{params.no}</h2>
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur magni minima possimus quos ratione rem repudiandae sunt suscipit voluptates.
            </div>
        </div>
    )
}