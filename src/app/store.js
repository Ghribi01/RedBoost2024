import { configureStore } from '@reduxjs/toolkit'
import loginSliceReducer from './features/login/loginSlice'
import registerSliceReducer from './features/register/registerSlice'
import appReducer from './features/appSlice/appSlice'

// Configure the Redux store
const store = configureStore({
  reducer: {
    app: appReducer,
    loginSlice: loginSliceReducer,
    registerSlice: registerSliceReducer,
  },
})

export default store
