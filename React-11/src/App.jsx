
// import { createContext } from 'react'
import './App.css'
// import UserPage from './UserPage';

import UserPage2 from "./context/UserPage2"
import UserProvider from "./context/UserProvider"

// const users = [{id:1,name:"saro"},{id:2,name:"benita"}]
// export const UsersContext = createContext();
function App() {

  return (
    <>
    {/* <h1>App</h1>
    <UsersContext.Provider value={users}>
      <UserPage/>
    </UsersContext.Provider> */}
    
    
    <h1>Context</h1>
    <UserProvider>
      <UserPage2/>
    </UserProvider>
    </>
    
  )
}

export default App
