import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';

class List extends Component {
  state = {
    username: '',
    reposList: [],
  };

  componentDidMount() {
    const {navigation} = this.props;
    let username = navigation.getParam('name', '');

    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        console.log('success ', response);
        this.setState({reposList: response.data});
      })
      .catch(error => {
        console.log('error ', error.response.data);
      });
  }

  mountList() {
    return this.state.reposList.map((item, index) => {
      return (
        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
          <Text>{item.full_name}</Text>
          <Text />
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{paddingVertical: 20}}>
        {this.mountList()}
      </ScrollView>
    );
  }
}
 
List.navigationOptions = {
  title: 'List',
};
 
export default List;
