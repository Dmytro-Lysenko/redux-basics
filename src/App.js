import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { authActions } from "./store";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const auth = useSelector((state) => state.auth.isAuthenticated);
  console.log(auth);
  return (
    <>
      <Header />
      {!auth ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
