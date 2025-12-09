import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { adduser } from "../slices/userslice";
import axios from "axios";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getuser = async () => {
    try {
      const res = await axios.get("http://localhost:2000/profile/getuserdata", {
        withCredentials: true,
      });
      dispatch(adduser(res.data));
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
