import React, { useState } from "react";
import SignUp from "../../components/SignUp/SignUp";
import Login from "../../components/Login/Login";

export default function Auth({ setUser }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <style>{`body { background-image: url(https://res.cloudinary.com/diw7vmgum/image/upload/v1689027157/wallpaperflare.com_wallpaper_1_xlldyo.jpg); }`}</style>
      <section className="flex flex-col pr-20">
        <div className="flex items-center justify-around">
          <img className="h-10" src="" />
          &nbsp; &nbsp;
          <h1 className="text-5xl font-bold text-[#d4af37]">
            TN Electric Co. Ltd.
          </h1>
        </div>
        <h2 className="flex justify-center m-10 text-xl text-white">
          Illuminating Lives with Solar Energy
        </h2>
      </section>
      <div>
        {show ? <SignUp setUser={setUser} /> : <Login setUser={setUser} />}
        <p className={`flex justify-center text-white ${show ? "hidden" : ""}`}>
          Don't have an account yet?{" "}
          <a className="cursor-pointer" onClick={() => setShow(true)}>
            <span className=" pl-2 hover:underline">Sign Up</span>
          </a>
        </p>
        <div className="flex justify-center text-white">
          {show && (
            <p className="">
              Already have an account?{" "}
              <a className="cursor-pointer" onClick={() => setShow(false)}>
                <span className="hover:underline">Login </span>
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
