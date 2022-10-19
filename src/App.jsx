import React from "react"
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
