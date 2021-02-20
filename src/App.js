import logo from './logo.svg';
import './App.scss';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import SignInOutContainer from './container/index.jsx';
import "./style.scss";
function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Signup/> */}
     <SignInOutContainer/>
    </div>
  );
}

export default App;