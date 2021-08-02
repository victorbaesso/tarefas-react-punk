import { createSlice } from "@reduxjs/toolkit"
import { pull, pullAllBy } from "lodash";
import { Tarefa } from "../@types/tarefa"
import { RootState } from "../store";

interface TarefasState {
  tarefas: Tarefa[],
}

const initialState: TarefasState = { tarefas: [] };

export const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    saveTarefa(state, action) {
      state.tarefas.push(action.payload);
    },
    deleteTarefa(state, action) {
      pullAllBy(state.tarefas, [{'id': action.payload.id}], 'id');
    },
  },
})

export const selectTarefasState = (state: RootState) => state.tarefas;
// Extract the action creators object and the reducer
const { actions, reducer: tarefasReducer } = tarefasSlice
// Extract and export each action creator by name
export const { saveTarefa, deleteTarefa } = actions
// Export the reducer, either as a default or named export
export default tarefasReducer