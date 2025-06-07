import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { RequestStatusType, setStatusAC } from '../../app/app-reducer.ts'
import { AxiosError } from 'axios'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'))
  const res = await decksAPI.fetchDecks()
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
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (error:any) {
    let errorMessage: string='Error updating deck'
    if (error.response && error.response.data && error.response.data.errorMessages&& error.response.data.errorMessages[0].message) {
      errorMessage=error.response.data.errorMessages[0].message
    } else if (error instanceof AxiosError) {
      errorMessage = error.message
    } else if (error instanceof Error) {
      errorMessage = error.message
    }
    console.log(errorMessage)
  }
}
