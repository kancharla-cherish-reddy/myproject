import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "../slices/userslice";
import { useNavigate } from "react-router";

const Login = () => {
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:2000/login",
        { emailID, password },
        { withCredentials: true }
      );

      dispatch(adduser(res.data));
      console.log(res);
      return navigate("/feed");
    } catch (err) {
      if (err.status === 401) {
        console.log(err);
        setMessage(err.response.data);
        navigate("/login");
      }
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-sm my-20 mx-auto">
      <h2 className="card-title justify-center p-2 m-2">LOGIN PAGE</h2>
      <input
        type="text"
        value={emailID}
        placeholder="email address"
        className="input input-bordered w-full max-w-xs mt-4 mx-4"
        onChange={(e) => setEmailID(e.target.value)}
      ></input>

      <input
        type="text"
        value={password}
        placeholder=" password"
        className="input input-bordered w-full max-w-xs mt-4 mx-4"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <div className="card-body items-center text-center">
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handlelogin}>
            Login
          </button>
          <p className="text-red-500">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
