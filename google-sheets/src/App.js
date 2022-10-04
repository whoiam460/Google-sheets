import AppLayout from './components/layouts/AppLayout';
import {Aside} from './components/bundles'
import {Header} from './components/elements/Header'

function App() {
  return (
    
    <AppLayout header={<Header/> } aside={<Aside/>}/>

  )
}

export default App;
