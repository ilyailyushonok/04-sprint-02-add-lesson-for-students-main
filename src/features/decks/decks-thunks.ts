import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { RequestStatusType, setStatusAC } from '../../app/app-reducer.ts'

export const fetchDecksTC =  () =>async (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
  const res= await decksAPI.fetchDecks()
   dispatch(setStatusAC('succeeded'))
  dispatch(setDecksAC(res.data.items))

  // decksAPI.fetchDecks()
  //   .then((res) => {
  //   dispatch(setDecksAC(res.data.items))
  // })
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  return decksAPI.updateDeck(params).then((res) => {
    dispatch(updateDeckAC(res.data))
  })
}
