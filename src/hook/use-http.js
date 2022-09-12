import { useReducer } from "react";
import { useCallback } from "react";

const initialState = {
    data: null,
    status: null,
    error: null
}

const httpReducer = (state, action) => {

    if(action.type === 'send'){
        return {data: null, status: 'pending', error: null}
    }
    if(action.type === 'success'){
        return {data: action.data, status: 'completed', error: null}
    }
    if(action.type === 'error'){
        return {data: null, status: 'completed', error: action.error}
    }
    return initialState;
}

const useHTTP = (fetchData) => {

    const [httpdata, dispatch] = useReducer(httpReducer, initialState);

    const sendRequest = useCallback(async (requestedData) => {
        dispatch({type: 'send'})
        try{
           const data = await fetchData(requestedData);
        //    console.log(data);
           dispatch({type: 'success', data});
        }
        catch (error){
            dispatch({type: 'error', error: 'something went wrong'});
        }
        
    }, [fetchData]);

    return {
        sendRequest,
        ...httpdata
    }
}

export default useHTTP;