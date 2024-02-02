import React, { useState } from "react";

const AuthContext = React.createContext({
   isAuthenticated: false,
   setIsAuthenticated: () => {}
});

export default AuthContext;