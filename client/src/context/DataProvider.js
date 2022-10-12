import React, { createContext, useState } from "react";

export const DataContent = createContext(null);

const DataProvider = ({ children }) => {
  const [account,setAccount] = useState('');
    return (
        <DataContent.Provider value={{
            account,
            setAccount
        }}>
          {children}
        </DataContent.Provider>
    )

}

export default DataProvider;