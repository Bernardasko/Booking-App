import { useParams } from "react-router-dom";
function BookingPage() {
    const {id} = useParams();
    return ( 
        <div>
            <h1>Booking Page {id}</h1>
        </div>
     );
}

export default BookingPage;