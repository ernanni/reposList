import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './style'

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <View style={styles.Component}>
        <Text style={styles.Title}>Welcome to Repos List App</Text>
      </View>
    )
  }
}

Home.navigationOptions = {
  title: 'Home'
}

export default Home