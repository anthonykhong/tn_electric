import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div>
        <form
          className="bg-neutral-800 bg-opacity-90 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="flex justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-400 text-xl pb-5">
            Login
          </h2>
          <label className="block text-white font-bold mb-2 pt-2">Email</label>
          <input
            className="shadow bg-neutral-800 appearance-none border rounded w-full py-2 px-3 text-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label className="block text-white font-bold mb-2 pt-2">
            Password
          </label>
          <input
            className="shadow bg-neutral-800 appearance-none border rounded w-full py-2 px-3 text-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-center pt-8">
            <button
              type="submit"
              class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Log In
            </button>
          </div>
          <div className="flex justify-center font-display pt-2">
            <p className="error-message">&nbsp;{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
