import React, { Component} from 'react';
import {View, Text, Image} from 'react-native';
import styled from "styled-components/native";


const Card = styled.View`
    width: 360;
    height: auto;
    background-color: #CCC;
    align-items: flex-start;
    padding: 5px;
    border-radius: 5px;
    margin-left: 15;
    margin-right: 15;
    margin-bottom: 3px;
    
`;

 const TextSubTitle = styled.Text `
 color: #000;
 text-align: justify;
 margin: 5px;
 text-align: left;
`;

class CardDiarioOficial extends Component {
    
    
    render(){
        return(
            <View>             
                 <Card>
                        <TextSubTitle><Image style={{ height: 30, width: 30 }} source={require('../image/logo_defendoria.jpg')} />Diario Oficial Eletrônico de: {this.props.data.data_diario}</TextSubTitle>                        
                </Card> 
            </View>
        )
    }
}

export default CardDiarioOficial;