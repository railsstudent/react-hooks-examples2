import React, { useState, useContext, createContext } from 'react'

// create hook in context
const UserContext = createContext([
  {
    firstname: 'john',
    lastname: 'doe',
    email: 'john.doe@example.com',
    suffix: 1
  },
  () => {}
])

const UserComponent = () => {
  const [user, setUser] = useContext(UserContext)

  const updateUserSuffix = (user, delta) => {
    // return a function that update user suffix
    return () => setUser({...user, suffix: user.suffix + delta})
  }
  const buttonStyles = { 
    marginRight: '0.5rem',
    borderRadius: '5px',
    padding: '0.5rem'
  }

  return (
    <div>
      <p>first name: {user.firstname}</p>
      <p>last name: {user.lastname}</p>
      <p>email: {user.email}</p>
      <p>suffix: {user.suffix}</p>
      <button onClick={updateUserSuffix(user, 1)} style={buttonStyles}>
        Increment suffix
      </button>
      <button onClick={updateUserSuffix(user, -1)} style={buttonStyles}>
        Decrement suffix
      </button>
    </div>
  );
}

const ContextComponent = () => {
  const initialState = useState({
    firstname: 'jack',
    lastname: 'black',
    email: 'jack.doe@example.com',
    suffix: 1
  }) 

  return (
    <UserContext.Provider value={initialState}>
      <div>
        <h2>
          useContext Example
        </h2>
        <UserComponent />
      </div>
    </UserContext.Provider>
  )
}

export default ContextComponent;