import { configureStore } from '@reduxjs/toolkit'
import categoriasReducer from './slices/categoriasSlice'
import tarefasReducer from './slices/tarefasSlice'

export const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
    tarefas: tarefasReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch