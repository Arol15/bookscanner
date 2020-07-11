import React from "react";
import { Form, Button } from "semantic-ui-react";

const SignupForm = () => {
  return (
    <div>
      <div>New here? Create a free account!</div>
      <Form>
        <Form.Field>
          <input type="text" placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <input type="email" placeholder="Email address" />
        </Form.Field>
        <Form.Field>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button primary>Sign Up</Button>
      </Form>
    </div>
  );
};

export default SignupForm;
