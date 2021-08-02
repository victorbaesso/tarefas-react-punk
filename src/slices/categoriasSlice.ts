import { createSlice } from "@reduxjs/toolkit"
import { pull, pullAllBy } from "lodash";
import { Categoria } from "../@types/categoria"
import { RootState } from "../store";

interface CategoriasState {
  categorias: Categoria[],
}

const initialState: CategoriasState = { categorias: [] };

export const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    saveCategoria(state, action) {
      state.categorias.push(action.payload);
    },
    deleteCategoria(state, action) {
      pullAllBy(state.categorias, [{'id': action.payload.id}], 'id');
    },
  },
})

export const selectCategoriasState = (state: RootState) => state.categorias;
// Extract the action creators object and the reducer
const { actions, reducer: categoriasReducer } = categoriasSlice
// Extract and export each action creator by name
export const { saveCategoria, deleteCategoria } = actions
// Export the reducer, either as a default or named export
export default categoriasReducer