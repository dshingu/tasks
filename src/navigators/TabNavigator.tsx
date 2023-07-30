import TaskStackNavigator from "./TaskStackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const ScreenOptions = ({route}) => {
    tabBarIcon: ({ focused, color, size }) => {
        console.log(route);
        if ( route.name == 'Home' ) {
            return (
                <Feather name="zap" size={size} color={color} />
            );
        } 
        if ( route.name == 'Notifications' ) {
            return (
                <Ionicons name="notifications-outline" size={size} color={color} />
            )
        }
    }
}

export default () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
  
              if (route.name === 'Home') {
                return <Feather name="zap" size={size} color={color} />
              } 
              if (route.name === 'Notifications') {
                return <Ionicons name="notifications-outline" size={size} color={color} />
              } 
              if (route.name === 'Notifications') {
                return <Ionicons name="notifications-outline" size={size} color={color} />
              } 
              if (route.name == 'Account') {
                return <MaterialCommunityIcons name="account-circle-outline" size={size} color={color} />
              }
              // You can return any component that you like here!
              return <></>;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
          >
            <Tab.Screen name="Home" component={TaskStackNavigator} options={{tabBarLabel: '', headerShown: false}} />
            <Tab.Screen name="Notifications" component={TaskStackNavigator} options={{tabBarLabel: ''}} />
            <Tab.Screen name="Account" component={TaskStackNavigator} options={{tabBarLabel: ''}} />
        </Tab.Navigator>
    )
}