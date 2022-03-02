import React, { useEffect, useState } from "react";
import User from "../Components/User.component.jsx";

const UserContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let users = await fetch("https://jsonplaceholder.typicode.com/users");
      users = await users.json();
      if (users.length > 0) {
        let someUsers = users.splice(0, 3);
        setUsers(someUsers);
      }
    })();
  }, []);

  return users.map(user => <User key={user.id} name={user.name} company={user.company} website={user.website} />);
}

export default UserContainer;