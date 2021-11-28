import React, { Component} from 'react';
import {View, Text} from 'react-native';
import styled from "styled-components/native";


const Card = styled.View`
    width: 380;
    height: auto;
    background-color: #fff;
    margin-top: 10;
    align-items: center;
    padding: 10px;
    border-radius: 5px;

`;
const TextDataPublicao = styled.Text `
    font-weight: 400;
    font-size: 14px;
    color: #000;
    
`;
const ImageCard = styled.Image `
    width: 350;
    height: 220;
    background-color: #555;
    margin: 10px;
    border-radius: 5px;

`;
const TextoHeaderCard = styled.Text`
     font-size: 14px;
     color: #000;
    
 `;

const TextNoticia = styled.Text`
font-size: 14px;
color: #000;
text-align: justify;
margin-left: 10;
margin-right: 10;

`;
 const TextSubTitle = styled.Text `
 font-weight: 600;
 color: #000;
 margin-top: 5;
 text-align: justify;
 margin: 5px;
 text-align: center;
`;

class CardNoticia extends Component {
    
    render(){
        return(
            <View>
                 <Card>
                        <TextDataPublicao>Publicado em: {this.props.data.data}</TextDataPublicao>
                        <ImageCard  source={require('../image/pessoas.jpg')}  />
                        <TextSubTitle>{this.props.data.titulo}</TextSubTitle>
                           <TextNoticia>{this.props.data.texto.substr(1, 300)}...</TextNoticia>
                        </Card> 
            </View>
        )
    }
}

export default CardNoticia;