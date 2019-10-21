import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
 
class List extends Component {
 
  state = {
    username: '',
    reposList: []
  }
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.setState({username: this.props.navigation.getParam('name', 'ernanni')})
    console.log(this.state.username)
    
    axios.get(`https://api.github.com/users/ernanni/repos`)
      .then(response => {
        console.log('success ',response)
        this.setState({reposList: response})
      })
      .catch(error => {console.log('error ', error.response.data)})
  }

  mountList() {
    return this.state.reposList.map((item, index) => {
      return (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.full_name}</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View>
        {this.state.reposList}
      </View>
    )
  }
}

List.navigationOptions = {
  title: 'List'
}
 
export default List