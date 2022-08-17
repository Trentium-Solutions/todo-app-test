import {Combined} from './container/Combined'
import {store, persistore} from './state/store'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
function App() {
  // displays navbar and main function and wraps them in provider and persistgate

  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <Combined />
      </PersistGate>
    </Provider>
  )
}

export default App
