import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {id: 1, name:"saro" },
        {id: 2, name:"mobin"},
        {id: 3, name:"shakib"},
    ]);
  return (
    <UserContext.Provider value={{users, setUsers}}>
      {children}
    </UserContext.Provider >
  )
}

export default UserProvider
