import s from './Loader.module.css'
import { useAppSelector } from '../../../app/store.ts'
import { selectStatus } from '../../../features/decks/decks-selectors.ts'

export const LinearLoader = () => {
  const status = useAppSelector(selectStatus)
  return   <div className={status === 'loading'?s.linearLoader:''}></div>
  }