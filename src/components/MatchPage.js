import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native';
import Profile from './Profile';

export default class MatchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: "1"
        }
    }
    onPressButton_1 = () =>{
        this.setState({
            showText: "Profile 1"
        })
    }

    onPressButton_2 = () =>{
        this.setState({
            showText: "Profile 2"
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style = {styles.sample} onPress={this.onPressButton_1}>
                    <Image
                        style={styles.button}
                        source={require('./../../images/Craig.png')}
                    />
                    {/*<Text>{this.state.showText}</Text>*/}
                </TouchableOpacity>

                <TouchableOpacity style = {styles.sample} onPress={this.onPressButton_2}>
                    <Image
                        style={styles.button}
                        source={require('./../../images/Craig.png')}
                    />
                    {/*<Text>{this.state.showText}</Text>*/}
                </TouchableOpacity>

                <Profile source = {this.state.showText}/>

            </View>

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
