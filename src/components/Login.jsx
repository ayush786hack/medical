import React from "react";
import { useAppContext } from "../context/Appcontext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { setShowUserLogin, setUser } = useAppContext();

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const demoEmail = "demo.dev";
  const demoPassword = "123456";

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === "login") {
      if (email === demoEmail && password === demoPassword) {
        setUser({ email, name: "Demo User" });
        setShowUserLogin(false);
        localStorage.setItem("isLoggedIn", "true");
        alert("Logged in as Demo User ✅");
      } else {
        alert("Invalid credentials.\nUse demo@ankursama.dev / 123456");
      }
    } else {
      setUser({ email, name });
      setShowUserLogin(false);
      localStorage.setItem("isLoggedIn", "true");
      alert("Demo account created (not saved)");
    }
  };

  React.useEffect(() => {
    // If user already logged in before refresh, hide login modal
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setShowUserLogin(false);
    }
  }, [setShowUserLogin]);

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center bg-black/50"
      onClick={() => setShowUserLogin(false)} // close on background click
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking form
        className="relative p-[2px] rounded-lg border-glow-multi"
      >
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white"
        >
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary">User</span>{" "}
            {state === "login" ? "Login" : "Sign Up"}
          </p>

          {state === "register" && (
            <div className="w-full">
              <p>Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Your name"
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary/50"
                type="text"
                required
              />
            </div>
          )}

          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="demo.dev"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary/50"
              type="email"
              required
            />
          </div>

          <div className="w-full relative">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="123456"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary/50 pr-10"
              type={showPassword ? "text" : "password"}
              required
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {state === "register" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setState("login")}
                className="text-primary cursor-pointer"
              >
                click here
              </span>
            </p>
          ) : (
            <p>
              Create an account?{" "}
              <span
                onClick={() => setState("register")}
                className="text-primary cursor-pointer"
              >
                click here
              </span>
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-500/60 hover:bg-blue-500/90 transition-all text-white w-full py-2 rounded-md cursor-pointer"
          >
            {state === "register" ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
