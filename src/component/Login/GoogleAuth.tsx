import axios, {AxiosResponse} from 'axios';
import GoogleLogin from 'react-google-login';
import {setUser, User} from '../../reducer/userReducer';
import {useAppDispatch} from '../../store/hooks';
import {authUrl} from '../../util/url';

interface AuthResponse {
  token: string;
  user: User;
}

const GoogleAuth = () => {
  const dispatch = useAppDispatch();
  const onSuccess = async(res: any) => {
    try {
      console.debug('hitting backend auth: ', process.env.REACT_APP_BACKEND_URL);
      const result: AxiosResponse<AuthResponse> = await axios.post(authUrl, {
        token: res?.tokenId
      });
      console.debug('Got user data from backend: ', result.data.user);
      dispatch(setUser(result.data.user));
    } catch(err) {
      console.log(err);
    }
  };

  console.debug('Google client id: ', process.env.REACT_APP_GOOGLE_CLIENT_ID);
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={onSuccess}
      />
    </div>
  );
};

export default GoogleAuth;