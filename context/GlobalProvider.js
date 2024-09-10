import { createContext, useContext, useState, useEffect } from "react";
// import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggenIn, setisLoggenIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [splash, setSplash] = useState(null);

  // useEffect(() => {
  //   getCurrentUser()
  //     .then((res) => {
  //       if (res) {
  //         setisLoggenIn(true);
  //         setUser(res);
  //       } else {
  //         setisLoggenIn(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggenIn: true,
        setisLoggenIn,
        user,
        setUser,
        isLoading,
        splash,
        setSplash,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
