import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return(
        <MeetupDetail>
            <MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg" 
                title="A First Meetup"
                address="Some street 5, Some City"
                description="This is our first meetup"
            />
        </MeetupDetail>
    )
}

export default MeetupDetails;