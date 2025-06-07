import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'

export const App = () => {
  return (
    <div>
      <LinearLoader/>
      <Decks />
      <GlobalError />
    </div>
  )
}
