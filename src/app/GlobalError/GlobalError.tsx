import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppSelector } from '../store.ts'
import { selectGlobalError } from '../../features/decks/decks-selectors.ts'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectGlobalError)

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
