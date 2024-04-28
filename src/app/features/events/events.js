import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  events: [],
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload
    },
  },
})

export const { setEvents } = eventsSlice.actions
export default eventsSlice.reducer
