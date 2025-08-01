import React, { createContext, useContext } from "react";

export const DataContext = createContext("Aman");

const UserContext = ({children}) => {

    return (
        
        <div>
            {children}
        </div>

    );

}

export default UserContext;