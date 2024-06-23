import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Signin() {
  return (
    <div className="text-center">
      <h1 className="display-2 text-info">Sign in</h1>
      <form action="" className="w-50 mx-auto mt-5">
        <input
          type="text"
          name=""
          id=""
          className="form-control mb-4"
          placeholder="Username"
        />
        <input
          type="password"
          name=""
          id=""
          className="form-control mb-4"
          placeholder="Password"
        />
        <button type="submit" className="btn btn-primary">
          Signin
        </button>
      </form>
    </div>
  );
}

export default Signin;
