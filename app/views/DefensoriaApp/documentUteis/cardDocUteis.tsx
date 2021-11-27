import React, { Component} from 'react';
import {View, Text} from 'react-native';
import styled from "styled-components/native";




const Card = styled.View`
    width: 380;
    height: auto;
    background-color: #fff;
    align-items: flex-start;
    padding: 5px;
    border-radius: 5px;
    margin-left: 15;
    margin-right: 15;
    
    
    
`;

 const TextSubTitle = styled.Text `
 color: #000;
 text-align: justify;
 margin: 5px;
 text-align: left;
`;



class CardDocUteis extends Component {
    
    
    render(){
        return(
            <View>
                  
                 <Card>

                   
                        <TextSubTitle>{this.props.data.texto}</TextSubTitle>
                           
                </Card> 
            </View>
        )
    }
}

export default CardDocUteis;