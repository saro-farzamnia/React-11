import { useContext, useState } from "react"
import { UserContext } from "./UserProvider";

const FormUser = () => {
    const [name,setName] = useState('');
    const {users,setUsers} = useContext(UserContext);
    console.log({users,setName})

    const addHandler = () => {
        setUsers((users) => [...users,{id:Math.floor(Math.random()*100),name:name}]);
    }
  return (
    <div>
      <h3>Form User</h3>
      <input type="text" value={name} placeholder="Enter Name" onChange={e => setName(e.target.value)} />
      <button onClick={addHandler}>Add</button>
    </div>
  )
}

export default FormUser
