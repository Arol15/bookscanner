import React from "react";

function Signup() {
  return (
    <div>
      <div>New here? Create a free account!</div>
      <form>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="email" placeholder="Email address" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
