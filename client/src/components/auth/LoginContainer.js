import {
    loginSuccessActionCreator,
    logoutActionCreator
} from '../../redux/reducers/login-reducer';
import axios from 'axios';
import Login from './Login';
import Navbar from '../navbar/Navbar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        token: state.loginPage.token,
        isAuthenticated: state.loginPage.isAuthenticated
    }
}

let mapDispatchToProps = (dispatch) => ({

    LoginUser: async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/auth', formData, config);
        dispatch(
            loginSuccessActionCreator(res.data)
        );
    },

    LogOut: () => {
        const action = logoutActionCreator();
        dispatch(action);
    }

});

export default {
    LoginContainer: connect(mapStateToProps, mapDispatchToProps)(Login),
    NavbarContainer: connect(mapStateToProps, mapDispatchToProps)(Navbar)
}
