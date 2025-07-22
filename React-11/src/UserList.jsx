import { useContext } from 'react'
import { UsersContext } from './App';

const UserList = () => {
    const users = useContext(UsersContext);
    console.log(users);
  return (
    <div>
        <h4>User List</h4>
        {
            users.map(i => <p key={i.id}>{i.name}</p>)
        }
    </div>
  )
}

export default UserList