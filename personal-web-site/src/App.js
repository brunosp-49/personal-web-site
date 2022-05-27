import React from "react";
import { GlobalStateProvider } from "./Global/globalState";
import Switch from "./router/Route";

function App() {
  return (
    <GlobalStateProvider>
      <div>
        <Switch />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
