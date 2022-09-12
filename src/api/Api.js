const httpApi = 'https://credentials-8e9d4-default-rtdb.firebaseio.com';

export const addCredentials = async (requestedData) => {
    const response = await fetch(`${httpApi}/credentials.json`, {
        method: 'POST',
        body: JSON.stringify(requestedData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('something went wrong!!');
    }

    return null;
}

export const getData = async () => {
    const response = await fetch(`${httpApi}/credentials.json`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error('something went wrong!!');
    }

    const transformedData = [];

    for (const key in data) {
        const credentialsObj = {
            id: key,
            ...data[key],
        };

        transformedData.push(credentialsObj);
    }

    return transformedData;
}