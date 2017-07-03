import React, {Component} from "react";
import {Text, View} from "react-native";
import ListContainer from './../list/ListContainer';
class Home extends Component{

    constructor()
    {
        super();
        this.state = {
            items: [{}],
        }
    }

    componentWillMount(){

       let updateState = (info) => {
            this.setState({
                items: info
            });
            console.log("Actualizado papud", this.state.items);
        }

        fetch("http://192.168.0.106:8000/api/listado/")
            .then(function(response){
                alert(`status papu ${response.status}`)
                return response.json();
            }).then(function (data) {
                console.log(data)
                updateState(data)
            }).catch(error => {
                console.error(error);
            })

    }

    render(){
        return(
            <View>
                <ListContainer datos={this.state.items} />
            </View>
        );
    }


}

export default Home;