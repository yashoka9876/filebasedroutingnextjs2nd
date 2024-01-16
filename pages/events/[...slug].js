import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/uI/error-alert';
import Button from '../../components/uI/button';

const FilteredEventsPage = () => {
  const router=useRouter();

  const filterDate=router.query.slug;
  if(!filterDate){
    return <p className="center">Loading....</p>
  }
  const filteredYear=filterDate[0];
  const filteredMonth=filterDate[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if(isNaN(numYear) || isNaN(numMonth) || numYear>2030 || numYear<2021 || numMonth<1 || numMonth>12){
    return <Fragment>
    <ErrorAlert>Invalid filter, Please adjust your values!</ErrorAlert>
    <div className='center'>
    <Button link='/events'>Show All Events</Button>
    </div>
  </Fragment>
  }

  const filteredEvents = getFilteredEvents({
    year:numYear,
    month:numMonth
  });

  if(!filteredEvents || filteredEvents.length === 0){
    return (
      
      <Fragment>
        <ErrorAlert>No events found for the chodse filter!</ErrorAlert>
        <div className='center'>
        <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    )
  }


  const date = new Date(numYear,numMonth-1);

  return (
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
    </Fragment>
  )
}

export default FilteredEventsPage