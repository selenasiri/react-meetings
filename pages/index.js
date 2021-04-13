import Layout from '../components/layout/Layout'
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
    return(
    <Layout>
        <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>     
    ); 
}

export default HomePage;