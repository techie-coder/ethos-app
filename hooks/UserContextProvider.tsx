import { getItemAsync, setItemAsync } from "expo-secure-store";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface UserContextType {
    user: string | null;
    authToken: string | null;
    setUser: (user: string | null) => void;
    setAuthToken: (authToken: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setInternalUser] = useState<string | null>(null);
    const [authToken, setInternalAuthToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadAuthData = async () => {
            try {
                const [storedUser, storedToken] = await Promise.all([
                    getItemAsync('user'),
                    getItemAsync('authToken')
                ]);

                if (storedUser) setInternalUser(storedUser);
                if (storedToken) setInternalAuthToken(storedToken);
            } catch (err) {
                console.error('Error loading auth data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        loadAuthData();
    }, []);


    const setUser = async (newUser: string | null) => {
        try {
            if (newUser) {
                await setItemAsync('user', newUser);
            }
            console.log(newUser);
            setInternalUser(newUser);
        } catch (err) {
            console.error('Error saving user:', err);
        }
    };

    const setAuthToken = async (newToken: string | null) => {
        try {
            if (newToken) {
                await setItemAsync('authToken', newToken);
            }
            setInternalAuthToken(newToken);
        } catch (err) {
            console.error('Error saving auth token:', err);
        }
    };

    if (isLoading) {
        return null;
    }

    return (
        <UserContext.Provider value={{
            user,
            authToken,
            setUser,
            setAuthToken
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserContextProvider');
    }
    return context;
};