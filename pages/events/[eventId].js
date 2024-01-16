import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from "../../components/uI/error-alert";

function EventDetailPage(){

    const router=useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId); 
    if(!event){
        return <ErrorAlert>No event found</ErrorAlert>
    }

    return (
        <>
         <EventSummary title= {event.title} />
         <EventLogistics 
            date={event.date} 
            address={event.location} 
            image={event.image} 
            imageAt={event.title} 
         />
         <EventContent>
            <p>{event.description}</p>
         </EventContent>
        </>
    );
}

export default EventDetailPage;