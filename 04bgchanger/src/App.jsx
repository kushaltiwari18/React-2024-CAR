import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState(() => {
    // Get the color from local storage or default to 'olive'
    return localStorage.getItem("bgColor") || "olive";
  });

  useEffect(() => {
    // Store the color in local storage whenever it changes
    localStorage.setItem("bgColor", color);
  }, [color]);
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
      rounded-3xl "
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("hotpink")}
            className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg "
            style={{ backgroundColor: "hotpink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg "
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#FEBE10")}
            className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg "
            style={{ backgroundColor: "#FEBE10" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#4B0082")}
            className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg "
            style={{ backgroundColor: "#4B0082" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
