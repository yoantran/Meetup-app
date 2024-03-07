import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const DUMMIE_DATA = [
    {
        id: "m1",
        title: "Fan Meetup",
        image:
            "https://pbs.twimg.com/media/FXUkg5AaMAAFjjB?format=jpg&name=4096x4096",
        address: "No. 599, Wangshang Road, Binjiang District, Hangzhou.",
        description:
            "This is an amazing meetup which you definitely should not miss for the fun. It will be a chitchat over your favorite character's birthday!",
    },
    {
        id: "m2",
        title: "Commission Meetup",
        image:
            "https://pbs.twimg.com/media/FMXF_tgaMAAFPR2?format=jpg&name=4096x4096",
        address: "San Francisco, Market Square, 1355 Market St #900, San Francisco, United States",
        description:
            "This is an opportunity hard to miss. It will be a chance to take on a great commission deal.",
    },
];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect (() => {
        setIsLoading(true);
        fetch(
          "https://reactjs-meetup-app-a6caa-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
              ).then(reponse => {
                return response.json()
              }).then(data => {
                // transform the data
                const meetup = []; // creating a helper array
                for (const key in data) {
                    // create new meetup for every key we loop
                    const meeup = {
                        id:key, // make id = key
                        ...data[key] // using the spread operator (default JS operator) distribute data key into this object
                    }
                    // then push up the data tot eh helper array above
                    meetups.push(meetup)
                }

                setIsLoading(false);
                setLoadedMeetups(meetups);
              });        
    }, []) // the { effect } in useEffect would execute if [ value ] is change. We should add all external values/dependencies into [ value ] that the { effect } relies on

          if (isLoading) {
            return (
              <section>
                <p>is loading...</p>
              </section>
            );
          } 


    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>);
}

export default AllMeetupsPage;
