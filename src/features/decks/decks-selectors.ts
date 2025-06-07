import { AppRootState } from '../../app/store.ts'

export const selectDecks = (state: AppRootState) => state.decks.decks
export const selectStatus = (state: AppRootState) => state.app.status
export const selectGlobalError = (state: AppRootState) => state.decks.globalError

