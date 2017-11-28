import { combineReducers } from 'redux';
import UsersReducer from './usersReducer';
import AuthReducer from './authReducer';
import AdminReducer from './adminReducer';
import MoviesReducer from './moviesReducer';
import SelectMovieReducer from './selectMovieReducer';

export default combineReducers({
    users: UsersReducer,
    auth: AuthReducer,
    admins: AdminReducer,
    movies: MoviesReducer,
    selectedMovie: SelectMovieReducer
});