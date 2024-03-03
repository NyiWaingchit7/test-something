import React, { useState } from "react";

const Main = () => {
  const [point, setPoint] = useState(20);
  const handlePosition = () => {
    const data = Math.floor(Math.random() * 90);
    console.log(data);
    setPoint(data);
  };
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div
        className="relative w-[1100px] h-[500px] bg-blue-600 rounded-2xl p-20"
        style={{ position: "relative" }}
      >
        <button class="absolute bottom-1/3 left-1/3 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
          Button
        </button>
        <button
          onMouseOver={handlePosition}
          class={`absolute bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full`}
          style={{ bottom: point + "%", left: point + "%" }}
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Main;
