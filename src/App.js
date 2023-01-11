import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";
function App() {
  return (
    <div className="App">
      <SignIn />
      <AuthDetails />
    </div>
  );
}

export default App;
