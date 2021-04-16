import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is our first meetup' 
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 55555 Some City',
        description: 'This is our second meetup' 
    }
]

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        // send an http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    }, [])

    return(
        <MeetupList meetups={loadedMeetups} /> 
    ); 
}

// const async getStaticProps = () => {

// }

export default HomePage;