import React, { Component } from 'react';
import { Button, Text, } from 'native-base';



export default class Footer extends Component {

    render() {
        return (
            <Button vertical style={{ color: '#ff5555' }}>
                <Text style={{ color: 'white' }} onPress={this.props.handleFooter}>{this.props.name}</Text>
            </Button>
        )
    }
}




