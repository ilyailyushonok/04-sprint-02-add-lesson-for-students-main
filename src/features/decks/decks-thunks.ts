import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, addErrorUpdatedDeskAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { RequestStatusType, setStatusAC } from '../../app/app-reducer.ts'
import { AxiosError } from 'axios'
import { handleError } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'))
  const res = await decksAPI.fetchDecks()
  dispatch(setStatusAC('succeeded'))
  dispatch(setDecksAC(res.data.items))

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
    const message= handleError(error)
    dispatch(addErrorUpdatedDeskAC(message))
  }
}

