import { createAppContainer, createStackNavigator } from 'react-navigation'
import {
  Favorites,
  Home,
  List
} from '../views'

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home
  })
)