import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

export const ButtonMenu = styled.TouchableOpacity`
top: ${Platform.OS === 'ios' ? StatusBar.currentHeight + 25+'px' : 10+'px'};
position: absolute;
margin: 0 8px;
justify-content: space-around;

`;