import React, { Fragment, useEffect, useState, useContext } from "react";
import blue_logo from "../../assets/img/brightmind-blue-logo.png";
import AuthContext from "../../context/auth/authContext";

const SignupView = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { register, login, isAuthenticated , error} = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (name === "" || email === "" || password === "") {
      //   setAlert("Please fill in all fileds", "danger");
      console.log("Put some values bro");
    } else {
      register({ name, email, password });
      login({ email, password });
    }
  };

  const { name, email, password } = user;

  return (
    <Fragment>
      <div className="bg-white">
        <div className="auth-bg">
          <div className="title-content text-center text-white pt-5">
            <h2>Welcome!</h2>
            <p>
              High quality exam prep that is more effective than private
              tutoring available 24/7 at a fraction of the cost
            </p>
          </div>
          <div className="card text-center auth-card">
            <div className="card-body">
              <h4>Register Now</h4>
              <img className="mt-3" src={blue_logo} alt="" width="180" />
              <form className="auth-form" onSubmit={onSubmit}>
                <div className="mb-2">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Your full name"
                  ></input>
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your email address"
                    name="email"
                    value={email}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Your password"
                    name="password"
                    value={password}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="d-grid gap-1">
                  <button className="btn btn-primary" type="submit">
                    SIGN UP
                  </button>
                </div>
                <p>
                  Already have an account? <a href="/login">Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignupView;
