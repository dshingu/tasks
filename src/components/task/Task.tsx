import React from 'react'
import * as Haptics from 'expo-haptics';
import { TaskContext } from '../../contexts/TaskContext';
import { Swipeable } from 'react-native-gesture-handler';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { ActionSheetIOS, Alert, Animated, View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { useAnimatedGestureHandler, useAnimatedStyle, withTiming, useSharedValue } from 'react-native-reanimated';

const Task = ({item}) => {

    const [x, setX] = React.useState(0);

    const {deleteTask} = React.useContext(TaskContext);
    const [hapticPlay, setHapticPlay] = React.useState(true);
    const options = {
        month: "long",
        day: "numeric",
      
    };
    item.due_at = new Date(item.due_at);

    const showDeleteHandler = (id: string) => {

        console.log(item);

        switch(Platform.OS) {
            case 'ios':
                ActionSheetIOS.showActionSheetWithOptions(
                    {
                      options: ['Cancel', 'Confirm Delete'],
                      destructiveButtonIndex: 1,
                      cancelButtonIndex: 0,
                      userInterfaceStyle: 'dark',
                      title: 'This task will be deleted.'
                    },
                    buttonIndex => {
                      if (buttonIndex === 0) {
                        // cancel action
                      } else if (buttonIndex === 1) {
                           deleteTask(id);
                      } 
                    },
                  );
            break;
            case 'android':
                Alert.alert('This task will be deleted.', 'Are you sure you want to delete this task?', [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Delete',
                        style: 'destructive',
                        onPress: (e) => console.log(e)
                    }
                ])
            break;
            default:
            break;
        }
        
    };


    const rightActions = (progress, dragX) => {

        return (
            <Animated.View style={[{flexDirection: 'row', justifyContent: 'center', height: '100%'}]}>
                <View style={{}}>
                    <MaterialIcons name="edit" style={[styles.iconStyle, {backgroundColor: 'blue'} ]}  />
                </View>
                <TouchableOpacity onPress={() => showDeleteHandler(item._id)}>
                    <View style={{}}>
                        <FontAwesome name="trash-o" style={[styles.iconStyle, {backgroundColor: 'red'}]} />
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    const leftActions = (progress, dragX) => {
        
        

        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        return (
            <View style={styles.leftActionContainer}>
                <Text style={[styles.leftActionText, {transform: [{scale: 1}]}]}>Mark as complete</Text>
            </View>
        );

    };

    const swipeableOpenHandler = (direction) => {
        
        if (direction == 'left') {
            
        }

    };

    

    return (
        <Swipeable
            renderLeftActions={leftActions}
            renderRightActions={rightActions}
            rightThreshold={40}
            friction={2}
        >
            <View style={styles.container}>
                <View style={[styles.taskContainer, {width: '100%', padding: 10, flex: 1}]}>
                    <View style={styles.taskTeaser}>
                                <Text>{item.title.charAt(0)}</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Text style={styles.taskTitle}>{item.title}</Text>
                        <Text style={styles.taskExcerpt}>{item.content}</Text>
                    </View>
                    <View>
                        <Text style={styles.taskDue}>Due {item.due_at.toLocaleDateString('en-US', options)}</Text>
                    </View>
                </View>
            </View>
        </Swipeable>
      )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 991,
        backgroundColor: 'blue'
    },
    taskContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    taskTeaser: {
        backgroundColor: '#e3e3e3', 
        width: 50, 
        height: 50, 
        borderRadius: 50, 
        fontSize: 22,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    taskTitle: {
        fontSize: 18,
        paddingHorizontal: 10,
        width: '100%'
    },
    taskExcerpt: {
        fontSize: 15,
        paddingHorizontal: 10
    },
    taskDue: {
        color: '#999',
        fontSize: 14
    },
    iconStyle: {
        fontSize: 25, color: 'white',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftActionContainer: {
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        flex: 1
    }, 
    leftActionText: {
        color: '#fff',
        paddingHorizontal: 20
    }
});

export default Task