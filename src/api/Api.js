// const httpApi = 'https://credentials-8e9d4-default-rtdb.firebaseio.com';

export const signinCredentials = async (requestedData) => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNEtJN8ksVoDLGTRoPOrtiRQqbQn6ogn0', {
        method: 'POST',
        body: JSON.stringify({
            email: requestedData.email,
            password: requestedData.password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const data =  await response.json();
        throw new Error(data.error.message);
    }

    return null;
}

export const loginCredentials = async (requestedData) => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNEtJN8ksVoDLGTRoPOrtiRQqbQn6ogn0', {
        method: 'POST',
        body: JSON.stringify({
            email: requestedData.email,
            password: requestedData.password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    
    if (!response.ok) {
        
        if (data && data.error && data.error.message){
            throw new Error(data.error.message);
        }
    }

    return data;
}