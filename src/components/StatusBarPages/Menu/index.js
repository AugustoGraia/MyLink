import React from "react";

import { ButtonMenu } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function(){

    const navigation = useNavigation();
    return(
        <ButtonMenu onPress={() => navigation.openDrawer() }>
            <Ionicons name="menu" size={40} color="#fff"/>
        </ButtonMenu>
    )
}