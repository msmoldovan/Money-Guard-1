import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/selectors';
import { logIn, logOut, register } from '../redux/operations';

function App() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectUser);

  const handleRegister = () => {
    dispatch(
      register({
        username: 'iuser16',
        email: 'email16@server.com',
        password: 'wps9916',
      })
    );
  };
  const handleLogin = () => {
    console.log('login');
    dispatch(
      logIn({
        email: 'email15@server.com',
        password: 'wps9915',
      })
    );
  };
  const handleLogout = () => {
    console.log(userLoggedIn);
    console.log('logout');
    dispatch(logOut());
  };

  return (
    <>
      <div>Ready for your code!</div>
      <p>contine cod temporar pt verificarea interactiunii cu backend-ul</p>
      <br />
      <p>isLoggedIn={userLoggedIn}</p>
      <br />
      <p>current user={currentUser.username}</p>
      <button type="button" onClick={handleRegister}>
        Register
      </button>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}

export default App;
