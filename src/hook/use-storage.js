import { useReducer } from "react";
import { useCallback } from "react";

import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNEtJN8ksVoDLGTRoPOrtiRQqbQn6ogn0",
  authDomain: "credentials-8e9d4.firebaseapp.com",
  databaseURL: "https://credentials-8e9d4-default-rtdb.firebaseio.com",
  projectId: "credentials-8e9d4",
  storageBucket: "credentials-8e9d4.appspot.com",
  messagingSenderId: "544299752957",
  appId: "1:544299752957:web:7e26965e1190720f0b8d94",
  measurementId: "G-7SQPN22E0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

const httpReducer = (state, action) => {

    if (action.type === 'send') {
        return { data: [], status: 'pending', error: null }
    }
    if (action.type === 'success') {
        return { data: [...state.data, action.data], status: 'completed', error: null }
    }
    if (action.type === 'error') {
        return { data: [], status: 'completed', error: action.error }
    }
    return state;
}


const useGetStorage = (startWithPending = false) => {
    
    const [httpdata, dispatch] = useReducer(httpReducer, {
        data: [],
        status: startWithPending ? 'pending' : null,
        error: []
    });

    const getImgDownloadUrl = useCallback((storageData, name) => {
        getDownloadURL(ref(storage, storageData))
            .then((url) => {
                // console.log(url);
                dispatch({type: 'success', data: {imgUrl: url, imgName: name}})
            })
            .catch((error) => {
                console.error(error);
                dispatch({type: 'error', error: error.message || 'Something went wrong'})
            });
    }, []);

    const fetchFirebaseStorage = useCallback((location) => {
        dispatch({type: 'send'})
        const listRef = ref(storage, location);
        listAll(listRef)
          .then((res) => {
            res.items.forEach((itemRef) => {
                let imgName = itemRef.name.split('.')[0];
                getImgDownloadUrl(itemRef, imgName);
            });
          }).catch((error) => {
            console.error(error);
            dispatch({type: 'error', error: error.message || 'Something went wrong'})
          });
    }, [getImgDownloadUrl]);

    return {
        fetchFirebaseStorage,
        ...httpdata
    }
}

export default useGetStorage;