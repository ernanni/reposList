import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'
 
class Home extends Component {
  state = {
    username: ''
  }
  constructor(props){
    super(props)
  }
 
 
  render() {
 
    return (
      <View style={styles.Component}>
        <Text style={styles.Title}>Welcome to Repos List App</Text>
        <View style={styles.Form}>
          <View style={styles.FormRow}>
            <Text style={styles.Label}>Username: @</Text>
            <TextInput
              style={styles.Input}
              onChangeText = {(username) => this.setState({username})}
              value = {this.state.username}
            />
          </View>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              this.props.navigation.navigate('List', { name: this.state.username })
            }}
          >
            <Text>Search</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}
 
Home.navigationOptions = {
  title: 'Home'
}
 
export default Home