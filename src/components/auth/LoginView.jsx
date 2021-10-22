import React, { useState, Fragment, useEffect, useContext } from "react";
import blue_logo from "../../assets/img/brightmind-blue-logo.png";
import AuthContext from "../../context/auth/authContext";

const LoginView = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, error } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    console.log(error);
    if (isAuthenticated) {
      history.push("/");
    }
    if (error === "Invalid credentials") {
    }
    // eslint-disable-next-line
  }, [isAuthenticated, history]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { email, password } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      //   setAlert("Please fill in all fileds", "danger");
      console.log("Put some values bro");
    } else {
      login({ email, password });
    }
  };
  return (
    <Fragment>
      <div className="bg-white">
        <div className="login-bg pt-5">
          <div className="card text-center auth-card">
            <form className="card-body" onSubmit={onSubmit}>
              <img className="mt-3" src={blue_logo} alt="" width="220" />
              <div className="login-title-content pt-5">
                <h3>Log In to Brightmind</h3>
                <p>Enter your email and password below</p>
              </div>
              <div className="auth-form mt-3">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    value={email}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">
                    PASSWORD
                  </label>
                  <span className="forgot-pwd">
                    <a href="/">Forgot password?</a>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={onChange}
                  ></input>
                </div>
                <div className="form-check form-switch mb-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="rememberSwitch"
                  ></input>
                  <label className="form-check-label" htmlFor="rememberSwitch">
                    Remember me
                  </label>
                </div>
                <div className="d-grid gap-1">
                  <button className="btn btn-primary" type="submit">
                    Log In
                  </button>
                </div>
                <p>
                  Don't have an account? <a href="/signup">Sign up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginView;
