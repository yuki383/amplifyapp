import logo from "./logo.svg";
import "./App.css";
import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'

function App(props) {
  const hoge = useAuthenticator();
  console.log({ props, hoge });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <div>Hello {hoge.user.username}</div>
      <div>
        <h2>SignOut</h2>
        <button onClick={hoge.signOut}>Sign Out</button>
      </div>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
