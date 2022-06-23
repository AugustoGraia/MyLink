import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function StatusBarPage(props){
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null; // ... por que pode ter mais de uma propriedade
}

