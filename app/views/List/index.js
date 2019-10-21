import React, { Component } from 'react'
import { View, Text } from 'react-native'
 
class List extends Component {
 
  state = {
    username: JSON.stringify(this.props.navigation.getParam('name'))
  }
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View>
        <Text>{this.state.username}</Text>
      </View>
    )
  }
}
 
List.navigationOptions = {
  title: 'List'
}
 
export default List