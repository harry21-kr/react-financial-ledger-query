import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

export const useUser = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
