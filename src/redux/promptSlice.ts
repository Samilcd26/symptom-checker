import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Prompt={
  id:number,
  input:string
}

export interface PromptState {
  [x: string]: any
  value: [Prompt]
}

const initialState: PromptState = {
  value:[],
}
var initId:number = 0
export const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    addNewItem: (state,payload) => {
      initId++
      state.value.push({id:initId, input:payload.payload})
      
    },
    removeItem: (state,payload) => {
      var tempt=-2
      state.value.map((value, index) =>{
        if (value.id==payload.payload) {
          tempt=index
        }
      })
      state.value.splice(tempt,1)
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addNewItem,removeItem } = promptSlice.actions

export default promptSlice.reducer