import { useReducer } from "react";
import { useCallback } from "react";

const httpReducer = (state, action) => {

    if (action.type === 'send') {
        return { data: null, status: 'pending', error: null }
    }
    if (action.type === 'success') {
        return { data: action.data, status: 'completed', error: null }
    }
    if (action.type === 'error') {
        return { data: null, status: 'completed', error: action.error }
    }
    return state;
}

const useHTTP = (fetchData, startWithPending = false) => {

    const [httpdata, dispatch] = useReducer(httpReducer, {
        data: null,
        status: startWithPending ? 'pending' : null,
        error: null
    });

    const sendRequest = useCallback(async (requestedData) => {
        dispatch({ type: 'send' })
        try {
            const data = await fetchData(requestedData);
            //    console.log(data);
            dispatch({ type: 'success', data });
        }
        catch (error) {
            dispatch({ type: 'error', error: 'Something went wrong!!⚠️⚠️' });
        }

    }, [fetchData]);

    return {
        sendRequest,
        ...httpdata
    }
}

export default useHTTP;