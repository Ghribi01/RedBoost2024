import { configureStore } from '@reduxjs/toolkit'
import loginSliceReducer from './features/login/loginSlice'
import registerSliceReducer from './features/register/registerSlice'

const store = configureStore({
  reducer: {
    loginSlice: loginSliceReducer,
    registerSlice: registerSliceReducer,
  },
})
export default store
