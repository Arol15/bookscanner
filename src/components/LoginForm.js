import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import data from "./users.js";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("demo");
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
    console.log(email, password);
  };

  const handleClick = (e) => {
    const { users } = data;
    console.log(users);
    let matchUser = users.filter(
      (user) => user.email === email && user.password === password
    );
    console.log(matchUser);
    if (matchUser) {
      console.log("hello from if statement");
      return history.push("/books");
    }
  };

  return (
    <div>
      <Form>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email address"
          value={email}
        ></input>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={password}
        />
        <Button onClick={handleClick} primary>
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
