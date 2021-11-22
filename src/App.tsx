import React from "react"; // no unused imports -1
import Browser from "./routes/Browser";

// use the export default in 1 single line.
function App() {
  /**
   * Code structure -1
   * If App is empty and only imports Browser, then just put everthing in browser here. You are making Browser depend on App for no reason.
   */
  return (
    <div className="App">
      <Browser />
    </div>
  );
}

export default App;
