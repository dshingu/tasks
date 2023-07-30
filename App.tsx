import AppNavigator from './src/navigators/Index';
import {TaskProvider} from './src/contexts/TaskContext'
import { AuthProvider } from './src/contexts/AuthContext';

export default () => {
  return (
    <AuthProvider>
      <TaskProvider>
          <AppNavigator />
      </TaskProvider>
    </AuthProvider>
  )
}
