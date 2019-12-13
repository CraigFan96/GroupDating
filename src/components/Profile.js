import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native';

export default class Profile extends Component {
    constructor(props) {
        super();
    }

    render(){
        return (
            <ScrollView>
                <Text>
                    Hi {this.props.source}
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lemonchiffon',
        flexDirection: 'column'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    sample: {
        padding: 50,
        flexDirection: 'row'
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    text: {
        fontSize: 42,
    },
});