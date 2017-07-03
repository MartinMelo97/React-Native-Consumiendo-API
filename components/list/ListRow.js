import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Content, List, ListItem, Left, Right, Body, Thumbnail, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

class ListRow extends Component {

    render() {
        console.log(this.props.user);
        return(
            <ListItem avatar>
                <View style={{flexDirection: 'row'}}>    
                <Left>
                    <Thumbnail source={{uri: this.props.user.imagen}} />
                </Left>
                
                <Body>    
                    <Text>{this.props.user.nombre}</Text>
                    <Text note>{this.props.user.puesto}</Text>
                    <Text>{this.props.user.id}</Text>    
                </Body>
                
                <Right style={{flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center'}} >
                    <Icon style={{fontSize:30, color: this.props.user.activo ? 'green' : 'red'}}name={this.props.user.activo  ? 'check' : 'times'} />
                </Right>
                </View>
            </ListItem>        
        );
    }
}

export default ListRow;