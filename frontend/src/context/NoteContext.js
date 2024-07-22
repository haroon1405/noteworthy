import { createContext, useReducer } from 'react'

export const NoteContext = createContext()

export const noteReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTES':
        return {
            notes: action.payload
        }
    case 'ADD_NOTE':
        return {
          notes: [action.payload, ...state.notes]
        }
    case 'UPDATE_NOTE':
      return {
          notes: state.notes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
      };
    case 'DELETE_NOTE':
      return {
          notes: state.notes.filter((note) => note._id !== action.payload._id)
      }
    default:
      return state
  }
}

const initialState = {
  notes: [],
}

export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialState)

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  )
}