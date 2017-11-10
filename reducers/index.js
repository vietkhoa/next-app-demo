import { combineReducers } from 'redux';
import UsersReducer from './usersReducer';
import AuthReducer from './authReducer';
import AdminReducer from './adminReducer';

export default combineReducers({
    users: UsersReducer,
    auth: AuthReducer,
    admins: AdminReducer
});