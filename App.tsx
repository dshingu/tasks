import AppNavigator from './src/navigators/Index';
import {TaskProvider} from './src/contexts/TaskContext'

export default () => {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  )
}
