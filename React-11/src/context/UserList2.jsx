import { useContext } from "react"
import { UserContext } from "./UserProvider";

const UserList2 = () => {
    const {users} = useContext(UserContext);
    console.log(users);
  return (
    <div>
      <h3>User List2</h3>
      {
        users.map(i => <p key={i.id}>{i.name}</p>)
      }
    </div>
  )
}

export default UserList2
