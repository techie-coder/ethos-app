import { getValueFor } from "./secureStore"

const getCurrentUser = async () => {
    const loginToken = getValueFor("loginToken")
    const response = await fetch("https://ethos-server.onrender.com/auth/")
    
}