import './App.css'
import ConditionalExample from './components/ConditionalExample'
import ListExample from './components/ListExample'
import PropsExample from './components/PropsExample'
import StateAndEventsExample from './components/StateAndEventsExample'
import FormExample from './components/FormExample'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Conceptos Básicos de React</h1>
        <p>Ejemplos prácticos para aprender React</p>
      </header>

      <main>
        <ConditionalExample />
        <ListExample />
        <PropsExample />
        <StateAndEventsExample />
        <FormExample />
      </main>

      <footer>
        <p>Creado con React + Vite</p>
      </footer>
    </div>
  )
}

export default App
