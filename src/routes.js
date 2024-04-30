import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Events = React.lazy(() => import('./components/Events/Events'))
const CreateEvents = React.lazy(() => import('./components/Events/CreateEvent'))
const User = React.lazy(() => import('./components/profile/UserProfile'))
const Activities = React.lazy(() => import('./components/ProgramMonitoring/Activities'))
const TaskManagment = React.lazy(() => import('./components/ProgramMonitoring/TaskManagment'))
const ProgramMonitoring = React.lazy(
  () => import('./components/ProgramMonitoring/ProgramMonitoring'),
)
const MainDatabaseManager = React.lazy(() => import('./views/dataBaseManager/MainDatabaseManager'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/user', name: 'User', element: User },
  { path: '/Database', name: 'Database Manager', element: MainDatabaseManager },
  {
    path: '/Monitoring',
    name: 'Program Monitoring',
    element: ProgramMonitoring,
  },
  { path: '/Monitoring/Activities', name: 'Activities', element: Activities },
  { path: '/Monitoring/Activities/TaskManagment', name: 'Task Managment', element: TaskManagment },
  { path: '/events', name: 'All events', element: Events },
  { path: '/CreateEvent', name: 'Create Events', element: CreateEvents },
]

export default routes
