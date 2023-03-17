import React from "react";

const HeaderOne = ({ user, setUser }) => {
  return (
    <div className="text-center text-teal-600 capitalize text-4xl font-bold flex justify-between box-border p-10">
      Welcome, {user}
      <button className="hover:bg-teal-700 hover:text-white  hover:border-white transition-all border-teal-600 duration-700 font-normal text-xl m-0 px-4 py-0 border-solid rounded-full  border"  onClick={() => setUser('')}>Logout</button>
    </div>
  );
};

export default HeaderOne;
