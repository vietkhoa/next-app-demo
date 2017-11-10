import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../reducers';
import Immutable from 'immutable';

export default (initialState = {}, secondObject) => {

    const isServer = secondObject.isServer;
    const req = secondObject.req
    let axiosInstance
    if (isServer) {
        axiosInstance = axios.create({
            baseURL: 'http://react-ssr-api.herokuapp.com',
            headers: { cookie: req.get('cookie') || '' }
        });
    } else {
        axiosInstance = axios.create({
            baseURL: '/api'
        });
    }



    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
};
