import { View, Text, ScrollView, FlatList, Animated, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Nav, Stage, Task } from '../../Types'
import TaskListHeader from '../../components/TakListHeader'
import TaskListTableHeader from '../../components/TaskListTableHeader'
import TaskListTableCart from '../../components/TaskListTableCart'
import { useQuery } from 'react-query'
import axios from 'axios'
import { DB_URL } from '../../global'

const HEADER_HEIGHT = 215

const TaskListScreen = ({ navigation, route }: Nav) => {
  // const tasks = route.params.tasks
  const service_id = route.params.service_id
  const service_name = route.params.service_name
  const service_desc = route.params.service_desc

  // fetching tasks
  const TASKS_QUERY = `
  {
    tasksByService(service_log_id: ${service_id}) {
      id
      service_log_id
      stage
      name
      description
      assignee_notes
      date
      createdAt
      updatedAt
    }
  }
`;
  const { data:tasks, isLoading, error } = useQuery("itstsks", () => {
    return axios({
      url: DB_URL,
      method: "POST",
      data: {
        query: TASKS_QUERY
      }
    }).then(response => response.data.data);
  });

  const [selectedStage, setSelectedStage] = useState(Stage.New)
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

  const pickColor = () => {
    switch (selectedStage) {
      case Stage.New:
        return ['#FF574A', '#FFDFDD']
      case Stage.Pending:
        return ['#FDA424', '#FFEBD0']
      case Stage.Done:
        return ['#51CE72', '#D3FFE3']
    }
  }

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
      <TaskListHeader navigation={navigation} service_name={service_name} service_desc={service_desc}/>

        {/* Table Header */}
        <TaskListTableHeader selectedStage={selectedStage} setSelectedStage={setSelectedStage} pickColor={pickColor}/>
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
      style={[styles.scroll_view, { backgroundColor: pickColor()[1] }]}
      >
      <View style={{ height: 265 }}></View>
      {
        tasks && tasks.tasksByService.map((task: any, index: number) => (
          task.stage == selectedStage &&
          <TaskListTableCart key={index} navigation={navigation} task={task}/>
        ))
      }
      </Animated.ScrollView>

    </View>
  )
}

export default TaskListScreen