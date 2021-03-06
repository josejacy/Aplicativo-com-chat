import React, { useState } from "react";
import styled from 'styled-components/native';
import { Button, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Page = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;
    align-items: center;
`;

const Input = styled.TextInput`
    height: 40px;
    width: 300px;
    border: 1px solid #CCC;
    border-radius: 5px;
    margin-top: 5px;
    background-color: #FFF;
`;
const TextoHeader = styled.Text`
     font-size: 15px;
     color: #FFF;
     font-weight: 600;
     margin-left: 10px;

 `;
const Header = styled.View`
     flex: 1;
     flex-direction: row;
     height: 70px;
     width: 100%;
     background-color: green;
     align-items: center;
     justify-content: center;
  
 `;

const Body = styled.View`
   flex: 9;
   background: #FFF;
   align-items: center;
   justify-content: center;
 `;


function HomeScreen() {
    const [nome, setNome] = useState('DEFENSORIA PÚBLICA DO ACRE');
    return (
        <Page>
            <Header>
                <Image style={{ height: 30, width: 30 }} source={require('./image/logo_defendoria.jpg')} />
                <TextoHeader>{nome}</TextoHeader>
            </Header>
            <Body>
                <Image style={{ height: 250, width: 250 }} source={require('./image/logo_defendoria.jpg')} />
                <Input></Input>
                <Button title='Continue' />
                <Button title='Deixar Gravado' />
                <Button title='Criar conta Nova' />
                <Button title='Chat' />
            </Body>


        </Page>




    );
}



export default HomeScreen;