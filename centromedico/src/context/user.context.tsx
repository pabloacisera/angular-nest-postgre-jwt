'use client';

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import axios from 'axios';

interface UserContextType {
  userData: any[];
  setUserData: Dispatch<SetStateAction<any[]>>;
  createUser: (user: { name: string; email: string; password: string, area:string }) => Promise<void>;
  loginUser: (email: string, password: string) => Promise<void>;
}

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<any[]>([]);

  const createUser = async (user: { name: string; email: string; password: string, area:string }) => {
    try {
      console.log('Datos recibidos en createUser:', user);
      const response = user;
      //const response = await axios.post('/api/create-user', user); 
      setUserData((prevData) => [...prevData, response]);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/login', { email, password }); 
      setUserData(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, createUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook para usar el contexto de usuario
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
