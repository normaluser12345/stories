import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TabCardType, TabIds, TabCardsTitles, TabCardsTag } from '../types';

interface TabsSliceState {
    tabs: TabCardType[]
}

const initialState: TabsSliceState = {
 tabs: [
        {
            id: TabIds.Articles,
            title: TabCardsTitles.Articles,
            isOpen: false,
            tag: TabCardsTag.Articles,
        },
        {
            id: TabIds.Courses,
            title: TabCardsTitles.Courses,
            isOpen: false,
            tag: TabCardsTag.Courses,
        },
        {
            id: TabIds.Media,
            title: TabCardsTitles.Media,
            isOpen: false,
            tag: TabCardsTag.Media,
        },
  ]
}

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    hideAllTabs: (state) => {
        const tab = state.tabs.find(tab => tab.isOpen === true)
        if (tab) {
          tab.isOpen = false
        }
    },
    openTab: (state, action: PayloadAction<TabCardsTag>) => {
        state.tabs.map(tab => {
          if (tab.tag === action.payload) {
            return tab.isOpen = true
          } 
          return tab.isOpen = false
        })
    },
  },
})

export const { hideAllTabs, openTab } = tabsSlice.actions

export default tabsSlice.reducer