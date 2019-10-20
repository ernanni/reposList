import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
  Favorites,
  Home,
  List
} from '../views'

const Routes = createAppContainer(
  createStackNavigator({
    Favorites: Favorites,
    Home: Home,
    List: List
  }, {
    initialRouteName: 'Home'
  })
)

export default Routes