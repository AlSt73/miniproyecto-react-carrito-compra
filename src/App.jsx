import './App.css'
import Bag from './component/Bag'
import Nav from './component/Nav'
import { ItemsProvider } from './helpers/ItemsProvider'

function App() {

  return (
    <ItemsProvider >
      <div className="container">
        <Nav />
        <Bag />
      </div>
    </ItemsProvider>
  )
}

export default App
