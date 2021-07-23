import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {/* <ChatRoom />
       */}
      {user ? <ChatRoom /> : <Login />}
    </div>
  );
}

export default App;
