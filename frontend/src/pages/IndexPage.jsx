import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((res) => {
      setPlaces(res.data);
    });
  }, []);
  return (
    <div className="mt-4 gap-x-6 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {places.length > 0 &&
        places.map((place) => (
            <Link to={"/place/" + place._id} key={place} >
            <div className="bg-gray-500 rounded-2xl flex">
              {place.photos?.[0] && (
                <img
                  className="rounded-2xl object-cover aspect-square"
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  alt=""
                />
              )}
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-xs truncate text-gray-500">{place.title}</h3>
            <div className="mt-1">
                <span className="font-bold">${place.price}</span> per night
            </div>
            </Link>
        ))}
    </div>
  );
}

export default IndexPage;
