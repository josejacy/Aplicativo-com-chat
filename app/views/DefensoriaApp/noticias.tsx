import React, { useState } from "react";
import styled from "styled-components/native";
import {Button, View, Image, Text, FlatList, ScrollView} from 'react-native';

const Page = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;
    align-items: center;
`;
const Card = styled.View`
    width: 380;
    height: auto;
    background-color: green;
    margin-top: 10;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    
`;

const TextHeaderCard = styled.Text `
    font-weight: 600;
`;
const TextSubTitle = styled.Text `
    font-weight: 600;
    color: #000;
    margin-top: 5;
    text-align: justify;
    margin: 5px;
`;

const ImageCard = styled.Image `
    width: 370;
    height: 220;
    background-color: #555;
    margin: 10px;
    border-radius: 5px;

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

 const Body = styled.View `
   flex: 9;
   background: #FFF;
   align-items: center;
 `;


 function Noticias () {
    const [nome, setNome] = useState('DEFENSORIA PÚBLICA DO ACRE');
    return (
            <Page>
                <   Header>
                    <Image style={{height: 30, width: 30}} source={require('./image/logo_defendoria.jpg')} />
                    <TextoHeader>{nome}</TextoHeader>
                 </Header>
             <Body>
                    <Text style={{marginTop: 20, fontSize: 20}}>Notícias</Text>
                 <ScrollView>
                 
                        <Card>
                        <TextoHeader>Bem vindo</TextoHeader>
                        <ImageCard source={require('./image/pessoas.jpg')}></ImageCard>
                        <TextSubTitle>Todas as noticias da defensoria publica do estado do acre, estara na palma da sua mão</TextSubTitle>
                        </Card>
                        <Card>
                        <TextoHeader>Bem vindo</TextoHeader>
                        <ImageCard source={require('./image/pessoas.jpg')}></ImageCard>
                        <TextSubTitle>Todas as noticias da defensoria publica do estado do acre, estara na palma da sua mão</TextSubTitle>
                        </Card>
                        <Card>
                        <TextoHeader>Bem vindo</TextoHeader>
                        <ImageCard></ImageCard>
                        <TextSubTitle>Todas as noticias da defensoria publica do estado do acre, estara na palma da sua mão</TextSubTitle>
                        </Card>
                        <Card>
                        <TextoHeader>Bem vindo</TextoHeader>
                        <ImageCard></ImageCard>
                        <TextSubTitle>Todas as noticias da defensoria publica do estado do acre, estara na palma da sua mão</TextSubTitle>
                        </Card>
                        <Card>
                        <TextoHeader>Bem vindo</TextoHeader>
                        <ImageCard></ImageCard>
                        <TextSubTitle>Todas as noticias da defensoria publica do estado do acre, estara na palma da sua mão</TextSubTitle>
                        </Card>
            </ScrollView>
            
             
           
            </Body>
             
                 
            </Page>
        
      
            
       
    );
}



export default Noticias;