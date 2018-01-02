import React from 'react'; 
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.22
import { Icon } from 'react-native-elements'; // 0.18.5
import HomeScreen from './Screens/HomeScreen';
import AddScreen from './Screens/AddScreen';
import DetailsScreen from './Screens/DetailsScreen';

import "@expo/vector-icons"; // 6.2.2

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => {
      return {
          headerTitle: 'Home',
          headerRight: <Icon 
                          name='add'
                          color='#61bd4f'
                          iconStyle={{padding: 10}}
                          onPress={() => navigation.navigate('Add') }
                        />,
        }
    }
  },
  Add: {
    screen: AddScreen,
    
  },
  Details: {
    screen: DetailsScreen,
  }
});

export default HomeStack;

