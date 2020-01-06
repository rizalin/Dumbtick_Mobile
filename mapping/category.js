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

class CategoryMap extends Component {
    state = {
        eventList: []
    };

    componentDidMount() {

        axios
            // .get(`http://192.168.1.20:5000/api/v1/category/2/events`)
            .get(`http://192.168.1.33:5000/api/v1/category/2/events`)
            .then(res => {
                this.setState({ eventList: res.data });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }




    render() {
        return (
            <ScrollView>
                {this.state.eventList
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

export default CategoryMap;