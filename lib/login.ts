export const generateOtp = async (email: string) => {
    try {
        const response = await fetch("https://ethos.vyse.site/auth/generate-otp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const resJSON = await response.json();
        return resJSON;
    } catch (error) {
        console.log('error:', error);
        throw error;
    }
}

export const getAuthToken = async (email: string | null, otp: string) => {
    try {
        const response = await fetch("https://ethos.vyse.site/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                OTP: otp
            })
        });

        const resJSON = await response.json();
        return resJSON;
    } catch (error) {
        console.log('error:', error);
        throw error;

    }
}

export const getRefreshToken = async (email: string | null) => {
    try {
        const response = await fetch("https://ethos.vyse.site/auth/refresh-token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        });

        const resJSON = await response.json();
        return resJSON.token;
    } catch (error) {
        console.log('error:', error);
        throw error;
    }
}

