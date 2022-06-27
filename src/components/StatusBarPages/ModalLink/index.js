import React from 'react';

import { ModalContainer, Container, Header, LinkArea, Title, 
        LongUrl, ShortLinkArea, ShortLinkUrl } from './style';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Title } from '../../../pages/Home/styles';

export default function ModalLink(){
    return(
        <ModalContainer>
            <Container>
                <Header>
                    <TouchableOpacity>
                        <Ionicons
                        name='enter'
                        color="#212743"
                        size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons
                        name='md-share-social'
                        color="#212743"
                        size={30}
                        />
                    </TouchableOpacity>
                </Header>

                <LinkArea>
                    <Title>Link encurtatado</Title>
                    <LongUrl>https://teste.com</LongUrl>     

                    <ShortLinkArea>
                        <ShortLinkUrl>
                        https://teste.com
                        </ShortLinkUrl>    

                    </ShortLinkArea>

                </LinkArea>
            </Container>
        </ModalContainer>
    )
}