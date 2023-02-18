import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchStoriesByTag } from '../helpers/fetchStories';

import { IStory } from '../../../types';
import { StatusState } from '../../../types';


interface StoriesSliceState {
  stories: IStory[] | []
  status: StatusState
  activeStory?: IStory
  finishedStories: string[]
}

const initialState: StoriesSliceState = {
  stories: [],
  status: 'idle',
  activeStory: undefined,
  finishedStories: [],
}

export const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    nullStories: (state) => {
      state.finishedStories = [];
      state.stories = [];
      state.activeStory = undefined;
      state.status = 'idle'
    },
    makeStoryActive: (state, action: PayloadAction<string>) => {
      const el = state.stories?.find(el => el.id === action.payload)
      state.activeStory = el
    },
    makeStoryFinished: (state, { payload: id }: PayloadAction<string>) => {
      state.finishedStories.push(id)
    },
    nextStoryOn: (state) => {
      if (state.activeStory) {
        const activeStoryIndex = +state.activeStory.id - 1
        state.activeStory = undefined
        state.activeStory = state.stories[activeStoryIndex + 1]
      }
    },
  },
  extraReducers:  {
    [fetchStoriesByTag.pending.type]: (state, action) => {
      state.finishedStories = []
      state.activeStory = undefined
      state.stories = []
      state.status = 'loading'
    },
    [fetchStoriesByTag.fulfilled.type]: (state, action: PayloadAction<IStory[]>) => {
      state.status = 'fulfilled'
      state.stories = action.payload
    },
    [fetchStoriesByTag.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = 'error'
    },
  },
})

export const { makeStoryActive, makeStoryFinished, nullStories, nextStoryOn } = storiesSlice.actions

export default storiesSlice.reducer