import React, { useState } from "react";
import { signUp } from "../../utilities/users-service";

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;
      const user = await signUp(data);
      setUser(user);
    } catch (error) {
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
    }
  };

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div className="flex justify-center items-center">
      <div className="form-container">
        <form
          className="bg-neutral-800 bg-opacity-90 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="flex justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-400 text-xl pb-5">
            Create Account
          </h2>
          <label className="block text-white font-bold mb-2 pt-2">
            Username
          </label>
          <input
            className="shadow bg-neutral-800 appearance-none border rounded w-full py-2 px-3 text-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="block text-white font-bold mb-2 pt-2">Email</label>
          <input
            className="shadow bg-neutral-800 appearance-none border rounded w-full py-2 px-3 text-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="block text-white font-bold mb-2 pt-2">
            Confirm Password
          </label>
          <input
            className="shadow bg-neutral-800 appearance-none border rounded w-full py-2 px-3 text-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-center pt-8">
            <button
              type="submit"
              disabled={disable}
              class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Sign Up
            </button>
          </div>
          <p className="error-message">&nbsp;{formData.error}</p>
        </form>
      </div>
    </div>
  );
}
