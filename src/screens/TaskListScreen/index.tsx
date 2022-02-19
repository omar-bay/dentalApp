import { View, Text, ScrollView, FlatList, Animated, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Nav, Task } from '../../Types'
import TaskListHeader from '../../components/TakListHeader'
import TaskListTableHeader from '../../components/TaskListTableHeader'
import TaskListTableCart from '../../components/TaskListTableCart'

const HEADER_HEIGHT = 300

const TaskListScreen = ({ navigation, route }: Nav) => {
  const tasks = route.params.tasks
  const service_name = route.params.service_name

  const [scrollAnim] = useState(new Animated.Value(0));
  const [offsetAnim] = useState(new Animated.Value(0));
  const [clampedScroll, setClampedScroll] = useState(Animated.diffClamp(
      Animated.add(
          scrollAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolateLeft: 'clamp'
          }), offsetAnim
      ), 0, 1
  ));

  const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT],
      extrapolate: 'clamp'
  })

  return (
    <View style={{ display: 'flex' }}>
      {/* Header */}
      <Animated.View style={[styles.header, {
          transform: [{translateY: navbarTranslate}]
      }]}
      onLayout={(event) => {
          let {height} = event.nativeEvent.layout;
          setClampedScroll(Animated.diffClamp(
              Animated.add(
                  scrollAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                      extrapolateLeft: 'clamp'
                  }),
                  offsetAnim
              ), 0, height)
          );
      }}
      >
      <TaskListHeader navigation={navigation}/>

        {/* Table Header */}
        <TaskListTableHeader/>
      </Animated.View>

      {/* Table Data */}
      <Animated.ScrollView
      bounces={false}
      onScroll={Animated.event(
          [ { nativeEvent: { contentOffset: { y: offsetAnim } } } ],
          { useNativeDriver: true }
      )}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      style={styles.scroll_view}
      >
      <View style={{ height: 412 }}></View>
      {
        tasks.map((task: Task, index: number) => (
          <TaskListTableCart key={index} navigation={navigation} task={task}/>
        ))
      }
      </Animated.ScrollView>

    </View>
  )
}

export default TaskListScreen