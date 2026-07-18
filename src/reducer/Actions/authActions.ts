import { AppThunk } from '../store';
import { signUpSuccess, signUpFailure } from '../tookitSlices/authSlice';
import axios from 'axios';

interface UserData {
 
  username: string;
  password: string;
}

export const signUp = async (credentials: Credential) => {
  try {
    const response = await axios.post('http://localhost:4000/api/v1/users/signup', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (userData: UserData): AppThunk => async (dispatch) => {
  try {
    const response = await axios.post('your_sign_in_api_endpoint', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;

    if (response.status === 200) { 
      dispatch(signUpSuccess());
    } else {
      dispatch(signUpFailure(data.error));
    }
  } catch (error) {
    dispatch(signUpFailure('An error occurred'));
  }
};
