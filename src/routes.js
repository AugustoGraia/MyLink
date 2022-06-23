import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

import { Ionicons } from '@expo/vector-icons';

const Drawer  = createDrawerNavigator();

export default function Routes(){
    return(
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: '#2ccb',
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    marginTop: 16, 
                    fontSize: 17,
                },drawerLabelStyle: {
                    fontSize: 19,
                }
            }}
            >
            <Drawer.Screen
                options={{
                    title: 'Encurtar Link',
                    drawerIcon: ({focused, size, color}) => (  // Function par add atributos para os icons 
                    <Ionicons 
                     name = {focused ? 'cube' : 'cube-outline'} // if para verificar se esta selecionado ou não o button
                     size={size} 
                     color="#0E6A81"/>
                ),
                headerShown: false,
            }}
                name="Home"
                component={Home}
            />
            <Drawer.Screen
                options={{
                    title: 'Meus links',
                    drawerIcon: ({focused, size, }) => (
                    <Ionicons
                     name = {focused ? 'link' : 'link-outline'}
                     size={size} 
                     color="#0E6A81"/>
                ),
                headerShown: false,
            }}
                name="MyLinks"
                component={MyLinks}
            />
        </Drawer.Navigator>
    )
}

