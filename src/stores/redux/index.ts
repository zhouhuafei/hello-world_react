import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: (state, payloadAction) => {
      state.value += payloadAction.payload
    },
    decremented: (state, payloadAction) => {
      state.value -= payloadAction.payload
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

export const store = configureStore({ reducer: counterSlice.reducer })
