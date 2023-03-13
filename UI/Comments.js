import theme from "@/src/theme";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useInput from "@/Hooks/use-input";

export default function Comments() {
  const [users, setUsers] = useState([]);
  const [age, setAge] = useState(null);

  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: nameValue,
      age: age,
      email: emailValue,
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

  const isNotEmpty = (val) => val.trim() !== "";
  const isEmail = (val) => val.includes("@");

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
    edit: editName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    edit: editEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    resetName();
    resetEmail();
    setAge(null);
  };

  function editUser(user) {
    editName(user.name);
    editEmail(user.email);
  }

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
      <form onSubmit={submitHandler}>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div>
            <TextField
              hiddenLabel
              size="small"
              id="outlined-search"
              label="Name"
              type="search"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              sx={{
                backgroundColor: theme.palette.text.main,
                width: "20rem",
                "& label.Mui-focused": {
                  color: theme.palette.secondary.dark,
                },
              }}
            />
            {nameHasError && (
              <p
                style={{
                  color: theme.palette.text.main,
                  backgroundColor: "#eb5b67",
                }}
              >
                Please Enter a valid Name
              </p>
            )}
          </div>
          <div>
            <TextField
              hiddenLabel
              size="small"
              id="outlined"
              label="Age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              sx={{
                backgroundColor: theme.palette.text.main,
                "& label.Mui-focused": {
                  color: theme.palette.secondary.dark,
                },
              }}
            />
          </div>
          <div>
            <TextField
              hiddenLabel
              size="small"
              id="outlined-search"
              label="Email"
              type="search"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              sx={{
                backgroundColor: theme.palette.text.main,
                width: "20rem",
                "& label.Mui-focused": {
                  color: theme.palette.secondary.dark,
                },
              }}
            />
            {emailHasError && (
              <p
                style={{
                  color: theme.palette.text.main,
                  backgroundColor: "#eb5b67",
                }}
              >
                Please Enter a valid Email ID
              </p>
            )}
          </div>
          {formIsValid ? (
            <Button variant="contained" color="success" onClick={createUser}>
              Create User
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled
              sx={{
                "&.Mui-disabled": {
                  backgroundColor: theme.palette.text.dark,
                },
              }}
            >
              Create User
            </Button>
          )}
        </div>
      </form>
      {users.map((user, index) => (
        <Card
          key={index}
          sx={{
            width: "20rem",
            height: "10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginY: "3rem",
            padding: "1rem",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "1.5rem", color: theme.palette.primary.main }}
            >
              {user.name}
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: theme.palette.primary.main }}
            >
              {user.age}
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: theme.palette.primary.main }}
            >
              {user.email}
            </Typography>
          </Box>
          <Box>
            <EditIcon
              sx={{ marginRight: "1rem" }}
              onClick={() => editUser(user)}
            />
            <DeleteIcon />
          </Box>
        </Card>
      ))}
    </Box>
  );
}
