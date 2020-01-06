import React, { Component } from "react";
import axios from "axios";
import EventCard from "../component/card";
import { View } from "native-base";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import moment from "moment"

const eventList = [
    {
        id: '1',
        title: "Pokoknya ini judulnya",
        price: '100.000',
        date: '1-1-20'
    },
    {
        id: '2',
        title: "Pokoknya ini judulnya",
        price: '100.000',
        date: '1-1-20'
    }
]

class UpcomingMap extends Component {
    state = {
        eventList: []
    };

    componentDidMount() {
        axios
            // .get("http://192.168.1.20:5000/api/v1/event/date/")
            .get("http://192.168.1.33:5000/api/v1/event/date/")
            .then(res => {
                this.setState({ eventList: res.data });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }




    render() {
        const today = new Date()
        const DateNow = moment(today).format("DD MMM YYYY")
        const date = moment(this.state.eventList.startTime).format("DD MMM YYYY")
        return (
            <ScrollView horizontal>
                {this.state.eventList
                    .filter(event => (moment(event.startTime).format("DD MMM YYYY").toString() !== DateNow))
                    .map(event => (
                        <EventCard
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            price={event.price}
                            date={event.startTime}
                            img={event.img}
                        />
                    ))}
            </ScrollView>


        );
    }
}

export default UpcomingMap;