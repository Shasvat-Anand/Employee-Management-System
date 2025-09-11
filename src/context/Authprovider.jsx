import React, {  createContext } from "react";
import { useState ,useEffect} from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
 
    // localStorage.clear()
    const [userdata, setuserdata] = useState(null)

    useEffect(() => {     
      setLocalStorage() 
      const {employees,admin} = getLocalStorage()
      setuserdata({employees,admin})
      
    },[])
    
    
   

  return (
    <div>
      <AuthContext.Provider value={userdata}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default Authprovider;
