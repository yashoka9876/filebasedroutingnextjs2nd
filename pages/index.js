import React from 'react'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list';

const HomePage = () => {
    const featuredEvents= getFeaturedEvents();
  return (
    <div>
        <header>
            <nav></nav>
        </header>
        <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage