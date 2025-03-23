import { getItemAsync, setItemAsync } from "expo-secure-store";
import { getRefreshToken } from "./login";
import { useUser } from "../hooks/UserContextProvider";

const BASE_API = "https://ethos.vyse.site/search/";

const authenticate = async () => {

    const { user } = useUser();

    const refreshToken = await getItemAsync('refreshToken');
    if (!refreshToken) {
        let newToken = await getRefreshToken(user);
        let tokenExpTime = Date.now() + 3600 * 1000;
        await setItemAsync('refreshToken', newToken);
        await setItemAsync('tokenExpTime', tokenExpTime.toString());
    }
    else {
        let tokenExpTime = await getItemAsync('tokenExpTime');
        if (!tokenExpTime || Date.now() >= parseInt(tokenExpTime) - (300 * 1000)) {
            let newToken = await getRefreshToken(user);
            tokenExpTime = (Date.now() + 3600 * 1000).toString();
            await setItemAsync('refreshToken', newToken);
            await setItemAsync('tokenExpTime', tokenExpTime);
        }
    }
}

export const getTracks = async (trackName: string) => {
    try {
        await authenticate();
        const authToken = await getItemAsync('refreshToken');
        const response = await fetch(`${BASE_API}/tracks/${trackName}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${authToken}`
            }
        })
        const results = await response.json();
        return results;
    } catch (err) {
        console.log(err);
    }
} 