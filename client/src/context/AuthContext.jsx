import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const[user,setUser] = useState(null);
    const[registerError,setRegisterError] = useState(null);
    const[isregisterLoading,setIsRegisterLoading] = useState(false);
    const[registerInfo, setRegisterInfo] = useState({
        name:"",
        email:"",
        password:"",
    })
    const[loginError,setLoginError] = useState(null);
    const[isLoginLoading,setIsLoginLoading] = useState(false);
    const[loginInfo, setLoginInfo] = useState({
        email:"",
        password:"",
    })
    console.log("registerInfo", registerInfo)

    const updateRegisterInfo = useCallback((info)=>{
        setRegisterInfo(info)
    },[])

    const updateLoginInfo = useCallback((info)=>{
        setRegisterInfo(info)
    })

    const registerUser = useCallback(async (e) => {
        e.preventDefault()
        setIsRegisterLoading(true)
        setRegisterError(null)
       const reponse = await postRequest(
            `${baseUrl}/users/register`,
            JSON.stringify(registerInfo)
        );

        setIsRegisterLoading(false)

        if(reponse.error){
            return setRegisterError(response)
        }
        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)

    }, [registerInfo]);

    const loginUser = useCallback(async () => {
        e.preventDefault()
        setLoginLoading(true)
        setLoginError(null)
        const reponse = await postRequest(
            `${baseUrl}/users/login`,
            JSON.stringify(loginInfo)
        );
        if(reponse.error){
            return setLoginError(response)
        }
    },{loginInfo})
    
    
    return (<AuthContext.Provider 
    value={
        {
            user, 
            registerInfo,
            updateRegisterInfo,
            registerUser,
            registerError,
            isregisterLoading
            }}
            >
        {children}
    </AuthContext.Provider>);
};
 
// export default AuthContext;