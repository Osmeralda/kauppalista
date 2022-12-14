import React, {useEffect, useState } from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import "./Dashboard.css";
import {auth, db, logout} from "./firebase";
import {query, collection, getDocs, where} from "firebase/firestore";
import ToDoMain from './ToDoMain';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const gq = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(gq);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("an error occurred while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div>
    <div className='dashboard'>
      <div className='dashboard__container'>
        Logged in as: 
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className='dashboard__btn' onClick={logout}>
          Logout
        </button>
      </div>
    </div>
    <ToDoMain />
    </div>
  );
}

export default Dashboard;