import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPages';
import Menu from '../../components/StatusBarPages/Menu';


import { Ionicons } from '@expo/vector-icons'; 
import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput,
        BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles';
import { Platform } from 'react-native-web';
import { ButtonMenu } from '../../components/StatusBarPages/Menu/styles';

export default function Home(){
    return(
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <LinearGradient
        colors={['#1ddbb9', '#132742']}
        style={{ flex:1, justifyContent: 'center'}}
        >

        <StatusBarPage
            barStyle="light-content"
            backgroundColor="#1ddbb9"
        />
        <Menu/>

        <ContainerLogo>
            <Logo source={require('../../assets/logo.png')} resizeMode='contain'/> 
        </ContainerLogo>
            <ContainerContent>
                <Title>MyLinks</Title>
                    <SubTitle>Cole seu link para encurtar</SubTitle>
               
                    <ContainerInput>
                        <BoxIcon>
                            <Ionicons name="link" size={22} color="#fff"/>
                        </BoxIcon>
                            <Input
                            placeholder="Cole seu link aqui"
                            placeholderTextColor="white"
                            />
                    </ContainerInput>
                    <ButtonLink>
                        <ButtonLinkText>
                                Gerar Link
                        </ButtonLinkText>
                    </ButtonLink>
            </ContainerContent>
        </LinearGradient>
    </KeyboardAvoidingView>
    )
}
