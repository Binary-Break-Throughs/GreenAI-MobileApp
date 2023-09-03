import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Favourite from '../screens/Dashboard'
import Chatbot from '../screens/Chatbot'
import {Image} from 'react-native'

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"",
                    headerShown: false,
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/8.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel:"",
                    headerShown: false,
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/dashboard-solid-24.png")}
                            style={{ height:22, width:22 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Chatbot"
                component={Chatbot}
                options={{
                    tabBarLabel:"",
                    headerShown: false,
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/chat-regular-24.png")}
                            style={{ height:22, width:22 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;