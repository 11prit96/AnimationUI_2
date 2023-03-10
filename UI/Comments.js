import theme from "@/src/theme";
import { Box, Typography } from "@mui/material";
import React from "react";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";
import { doc, getDocs, collection, addDoc } from "firebase/firestore";

export default function Comments() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: name,
      age: age,
      comment: comment,
    });
  };

  useEffect(() => {
    async function getUsers() {
      const data = await getDocs(usersCollectionRef);
      let usersArr = [];
      data.forEach((doc) => {
        usersArr.push(doc.data());
      });
      setUsers(usersArr);
    }
    getUsers();
  }, []);

  console.log(users);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingY: "5rem",
      }}
    >
      <div style={{ display: "grid", gap: "1rem" }}>
        <input
          style={{ fontSize: "2rem" }}
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ fontSize: "2rem" }}
          placeholder="Age..."
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          style={{ fontSize: "2rem" }}
          placeholder="Comment..."
          onChange={(e) => setComment(e.target.value)}
        />
        <button style={{ fontSize: "2rem" }} onClick={createUser}>
          Create User
        </button>
      </div>
      {users.map((user, index) => (
        <Box key={index} sx={{width: "100%", height: "10rem", textAlign: "center", marginY: "2rem"}}>
          <Typography sx={{fontSize: "1.5rem", color: theme.palette.text.main}}>{user.name}</Typography>
          <Typography sx={{fontSize: "1rem", color: theme.palette.text.main}}>{user.age}</Typography>
          <Typography sx={{fontSize: "1rem", color: theme.palette.text.main}}>{user.comment}</Typography>
        </Box>
      ))}
    </Box>
  );
}
