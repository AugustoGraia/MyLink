import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerLogo = styled.View`
align-items: center;
justify-content: center;
margin-top: ${ Platform.OS === 'ios' ? 35+'px' : 15+'px'};
`;

export const Logo = styled.Image`
width: 250px;
height: 250px;
transform: rotate(350deg); // rotação
`;

export const ContainerContent = styled.View`
margin-top: ${ Platform.OS === 'ios' ? 20+'%' : 15+'%'};
`;

export const Title = styled.Text`
font-size: 35px;
color: #fff;
font-weight: bold;
text-align: center;
`;

export const SubTitle = styled.Text`
font-size: 20px;
color: #fff;
font-weight: bold;
text-align: center;
`;