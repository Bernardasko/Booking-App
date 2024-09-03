import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";

function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get("/bookings").then((response) => {
            setBookings(response.data);
        })
    }, []);
    return ( 
        <div>
            <AccountNav />
            <div>
                {bookings?.length > 0 && bookings.map((booking) => {
                    return (
                        <div key={booking._id}>
                            
                            {booking.checkIn} - {booking.checkOut}
                        </div>
                    );
                })}
            </div>
        </div>
     );
}

export default BookingsPage;