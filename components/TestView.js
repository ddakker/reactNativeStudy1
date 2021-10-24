import axios from 'axios';
import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import http from '../utils/Http';


export default class TestView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
        this.onPressButton = this.onPressButton.bind(this);
        this.test = this.test.bind(this);
    }

    test(a) {
        console.log("test 222");
    }

    onPressButton() {
        this.test('a')
        // console.log(this.state.open);
        console.log("onPressButton 11");

        http.get('/check?a=1')
            .then(function (response) {
                // handle success
                // console.log(response);
                console.log("response.data: ", response.data.result.health)
                Alert.alert('okCache: ' + response.data.result.health.okCache)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                console.log("end");
            });

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title={'HTTP 호출'}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    multiButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})  