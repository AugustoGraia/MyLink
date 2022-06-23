import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StatusBarPage from '../../components/StatusBarPages';

export default function MyLinks(){
    return(
        <View>
             <StatusBarPage
            barStyle="light-content"
            backgroundColor="#132742"
        />
            <Text>Pagina Links</Text>
        </View>
    )
}