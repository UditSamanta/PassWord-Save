import React from 'react';
import LottieView from 'lottie-react-native';

export default class Logo extends React.Component{
    render(){
        return(
            <LottieView source={require('../assets/icon/data.json')}
            style={{width:'50%', height:'50%'}}
            autoPlay
            loop
            />
        )
    }
}