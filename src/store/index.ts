import { configureStore } from '@reduxjs/toolkit'
import storiesSlice from '../modules/TabCard/store/storiesSlice'
import tabsSlice from '../modules/TabCard/store/tabsSlice'

const store = configureStore({
  reducer: {
    stories: storiesSlice,
    tabs: tabsSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store