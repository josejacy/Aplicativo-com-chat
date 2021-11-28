import React, { useState, Component } from "react";
import styled from "styled-components/native";
import { Image, Text, ScrollView, FlatList } from 'react-native';
import api from './apiDiarioOficial';
import CardDiarioOficial from "./cardDiarioOficial";

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
 `;


class diarioOficial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CardDiarioOficial: []
        }
    };

    async componentDidMount() {
        const response = await api.get('apiapp/api_diario_eletronico.php/');
        this.setState({
            CardDiarioOficial: response.data
        })
    }

    render() {
        return (
            <Page>
                <Header>
                    <Image style={{ height: 30, width: 30 }} source={require('../image/logo_defendoria.jpg')} />
                    <TextoHeader>Defensoria Publica do Acre</TextoHeader>
                </Header>
                <Text style={{ fontSize: 18, margin: 10 }}>Diario Oficial</Text>
                <Body>
                    <ScrollView>
                        <FlatList
                            data={this.state.CardDiarioOficial}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => <CardDiarioOficial data={item} />}
                        />

                    </ScrollView>
                </Body>
            </Page>
        )
    };
}

export default diarioOficial;