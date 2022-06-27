import React, { useState } from 'react';
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPages';
import Menu from '../../components/StatusBarPages/Menu';
import ModalLink from '../../components/StatusBarPages/ModalLink';


import { Ionicons } from '@expo/vector-icons'; 
import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput,
        BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles';
import { Alert, Platform, Modal } from 'react-native';
import { ButtonMenu } from '../../components/StatusBarPages/Menu/styles';

export default function Home(){

    const [input, setInput] = useState('');   
    const [modalVisible, setModalVisible] = useState(false);  

    function handleShortLink(){
        setModalVisible(true);
    }
    return(                                                 
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>  
        <LinearGradient
        colors={['#1ddbb9', '#132742']}
        style={{ flex:1, justifyContent: 'center'}}
        >
        <KeyboardAvoidingView style={{flex: 1}} behavior='position'
        enabled
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
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder="Cole seu link aqui"
                            placeholderTextColor="white"
                            keyboardType="url"
                            value={input}
                            onChangeText={ (text) => setInput(text)}
                            />
                    </ContainerInput>
                    <ButtonLink onPress={ handleShortLink }>
                        <ButtonLinkText>
                                Gerar Link
                        </ButtonLinkText>
                    </ButtonLink>
            </ContainerContent>
            </KeyboardAvoidingView>
            <Modal visible={modalVisible} transparent animationType="slide">
                <ModalLink/>
            </Modal>
        </LinearGradient>
    </TouchableWithoutFeedback>
    

    )
}
