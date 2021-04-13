// localhost:3000/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;

// We'll be using onAddMeetup (to create a new meetup)
// So add a pointer to the addMeetupHandler^ 