import { BrowserRouter, Route, Routes } from "react-router";
// import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import Feed from "./components/Feed";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/feed" element={<Feed />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>

    //   <>
    //     <Navbar />
    //   </>
  );
}

export default App;
