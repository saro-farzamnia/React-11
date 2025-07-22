
import { createContext } from 'react'
import './App.css'
import UserPage from './UserPage';

const users = [{id:1,name:"saro"},{id:2,name:"benita"}]
export const UsersContext = createContext();
function App() {

  return (
    <>
    <h1>App</h1>
    <UsersContext.Provider value={users}>
      <UserPage/>
    </UsersContext.Provider>
    </>
  )
}

export default App
