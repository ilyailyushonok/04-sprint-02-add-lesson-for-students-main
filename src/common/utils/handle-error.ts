import { AxiosError } from 'axios'

export const handleError = (error:any) => {
  let errorMessage: string='Error updating deck'
  if (error.response && error.response.data && error.response.data.errorMessages&& error.response.data.errorMessages[0].message) {
    errorMessage=error.response.data.errorMessages[0].message
  } else if (error instanceof AxiosError) {
    errorMessage = error.message
  } else if (error instanceof Error) {
    errorMessage = error.message
  }
  return errorMessage
};

