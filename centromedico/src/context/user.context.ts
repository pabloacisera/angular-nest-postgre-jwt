
import { createContext, useContext, useState } from 'react';


const UserContext = createContext(null);

const UserProvider = ({ children }) => {
 

  return 
    <UserContext.Provider value={}>
      {children}
    </UserContext.Provider>
  
}

// Custom hook para usar el contexto de usuario
const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
