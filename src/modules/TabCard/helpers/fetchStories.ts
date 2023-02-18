import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { TabCardsTag } from '../types'
import { IStory } from '../../../types'


export const fetchStoriesByTag = createAsyncThunk(
  'fetchByTag',
  async (tag: TabCardsTag, { rejectWithValue }) => {
    let result;
    try {
      const response = await axios.get<IStory[]>(`http://localhost:8000/${tag}`)
      result = await response.data
      return result
    } catch (e) {
      if (e instanceof Error) {
        result = e.message
      }
    }
  }
)