import React, { Component } from "react";
import axios from "axios";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Footer from "./footer"

class FooMap extends Component {
    state = {
        category: []
    };

    componentDidMount() {
        axios
            .get("http://192.168.1.20:5000/api/v1/categories")
            .then(res => {
                this.setState({ category: res.data });
                console.log(res.data);
            })
            .catch(err => console.log(err));
        console.log(this.props)
    }




    render() {
        return (
            <ScrollView horizontal>
                {this.state.category.map(cat => (
                    <Foo
                        key={cat.id}
                        id={cat.id}
                        name={cat.name}
                    // handleFooter={this.props.handleFooMap}
                    />
                ))}
            </ScrollView>
        );
    }
}

class Foo extends Component {

    render() {
        return (
            <Button vertical style={{ color: '#ff5555' }}>
                <Text style={{ color: 'white' }}
                // onPress={this.props.handleFooter}
                >{this.props.name}</Text>
            </Button>
        )
    }
}


export default FooMap;