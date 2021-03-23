import firebase from 'firebase';
import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {base64} from 'js-base64';
import db from '../config'

export default class PasswordSave extends React.Component{
    constructor(){
        super();
        this.State={
            application:'',
            password:'',
            encryptedPassword:'',
            useremailid:firebase.auth().currentUser.email
            
        }
    }
    
    encryptPassword=()=>{
        var encryptPassword=base64.encode(this.state.password)
        this.this.setState({
            'encryptedPassword':encryptPassword ,
        })
    }

    savePasswordToFirebase=()=>{
        db.collection("encrypted_password").add({
            "application_name":this.state.application,
            "password":this.state.encryptedPassword,
            "email_id":this.state.useremailid
        })
    }

    render() {
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text>Password Save</Text>
        <TextInput 
        onChangeText={(text)=>{
            this.setState({
                "application":text,
            })
        }
     }
     value={this.state.application}
     placeholder={"Enter The Application"}
        />
        <TextInput 
        onChangeText={(text)=>{
            this.setState({
                'password':text,
            })
        }}
        value={this.state.password}
        placeholder={"Password"}
        />
        
    <TouchableOpacity onPress={()=>{
        this.encryptPassword();
        this.savePasswordToFirebase();
    }}>
        <Text>Encrypt & Save</Text>
    </TouchableOpacity>

    <Text>{this.state.encryptedPassword}</Text>
            </View>
        )
    }
}