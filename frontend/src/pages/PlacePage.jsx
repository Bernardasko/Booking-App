import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
function PlacePage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then(({data}) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div>
      <AccountNav />
        <div className="text-center">
          <Link
            className="bg-primary text-white rounded-full py-2 px-4 inline-flex gap-1"
            to="/account/places/new"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
        <div className="mt-4">
          {places.length > 0 && places.map((place) => (
            <div key={place} className="bg-gray-200 p-4 rounded-2xl">
              {place.title}
             
            </div>
          ))}
        </div>
    </div>
  );
}

export default PlacePage;
