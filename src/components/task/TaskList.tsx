import React from 'react'
import Task from './Task'
import { FlatList, View, Text, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

const TaskList = ({items}) => {
 
  const navigation = useNavigation();

  const start = (props) => {
    console.log(props);
  }

  return (
    <>
      <FlatList style={{backgroundColor: '#fff', width: '100%', zIndex: 900, position: 'relative'}}
        data={items}
        renderItem={({item}) => {
        return (
          <GestureHandlerRootView onResponderStart={start}>
            <TouchableHighlight underlayColor={"#DDDDDD"} onPress={()=>{
              navigation.navigate('TaskDetail', {
                id: item._id
              })
            }}>
              <Task item={item} />
            </TouchableHighlight>
          </GestureHandlerRootView>
        )
      }}
        keyExtractor={item => item._id}
      />
    </>
  )
}

export default TaskList