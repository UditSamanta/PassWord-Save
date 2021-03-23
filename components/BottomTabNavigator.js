import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PasswordRead from '../screens/PasswordRead';
import PasswordSave from '../screens/PasswordSave';

export const BottomTabNavigator = createBottomTabNavigator({
    PasswordSave:{
        screen:PasswordSave
    },
    PasswordRead:{
        screen:PasswordRead
    }
})
