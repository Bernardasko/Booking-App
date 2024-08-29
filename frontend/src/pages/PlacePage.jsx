import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function PlacePage() {
    const {id} = useParams();
    const [place, setPlace] = useState(null);
    useEffect(() => {
        if(!id){
            return;
        }
        axios.get(`/places/${id}`).then((response) => {
            const {data} = response;
            setPlace(data);
        })
    }, [id]);

    if(!place) return "";
    return ( 
        <div className="mt-8">
            <h1>{place.title}</h1>
        </div>
     );
}

export default PlacePage;