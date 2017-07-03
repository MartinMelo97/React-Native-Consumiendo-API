import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List} from 'native-base';
import ListRow from './ListRow';

class ListContainer extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                    {this.props.datos.map(
                        (user) => <ListRow key = {user.id} user = {user}/>
                    )}  
                    </List>
                </Content>
            </Container>
        );
    }
}

export default ListContainer;