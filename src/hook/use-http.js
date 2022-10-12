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
            dispatch({ type: 'success', data });
        }
        catch (error) {
            // console.log(error.message);
            dispatch({ type: 'error', error: error.message || 'Something went wrong!!⚠️⚠️' });
        }

    }, [fetchData]);

    return {
        sendRequest,
        ...httpdata
    }
}

export default useHTTP;